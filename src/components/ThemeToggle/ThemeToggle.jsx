import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeReducer";
import Switch from "@mui/material/Switch";

function ThemeToggle() {
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <>
            <div
                className={theme}
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Switch
                    onChange={() => {
                        dispatch(toggleTheme());
                    }}
                />
            </div>
        </>
    );
}

export default ThemeToggle;
