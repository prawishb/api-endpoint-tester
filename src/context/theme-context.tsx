import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "system" | "light" | "dark";

const useThemeStore = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return {
    theme,
    setTheme,
  };
};

const ThemeContext = createContext<ReturnType<typeof useThemeStore> | null>(
  null
);

type Props = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const store = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (store.theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(store.theme);
  }, [store.theme]);

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      "useThemeContext must be used within ThemeProvider component."
    );

  return context;
};
