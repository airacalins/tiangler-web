import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from "react-router-dom";
import { CASH, CASH_LEDGER_PATH, CREDIT, CREDIT_LEDGER_PATH, DASHBOARD, EXPENSES, EXPENSE_PATH, HOME_PATH, INVENTORY, INVENTORY_PATH, LEDGER, LEDGER_PATH, ORDERS, ORDER_PATH, PAYMENT, PAYMENT_LEDGER_PATH, POS, POS_PATH, PRODUCTS, PRODUCT_PATH, PURCHASES, PURCHASE_PATH } from "../../utilities/stringsConstant";

interface NavLink {
    title: string;
    path: string;
    subItems?: Array<{ title: string; path: string; }>;
}

function SideNav() {
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks: Array<NavLink> = [
        { title: DASHBOARD, path: HOME_PATH },
        {
            title: LEDGER,
            path: LEDGER_PATH,
            subItems: [
                { title: CASH, path: CASH_LEDGER_PATH },
                { title: CREDIT, path: CREDIT_LEDGER_PATH },
                { title: PAYMENT, path: PAYMENT_LEDGER_PATH }
            ],
        },
        { title: PRODUCTS, path: PRODUCT_PATH },
        { title: POS, path: POS_PATH },
        { title: ORDERS, path: ORDER_PATH },
        { title: PURCHASES, path: PURCHASE_PATH },
        { title: EXPENSES, path: EXPENSE_PATH },
        { title: INVENTORY, path: INVENTORY_PATH },
    ];

    const handleNavigation = (index: number) => {
        navigate(navLinks[index].path);
    }

    const isActive = (path: string) => {
        return path === HOME_PATH ? location.pathname === path : location.pathname.includes(path);
    }

    return <Navbar>
        <Nav defaultActiveKey={HOME_PATH} className="flex-column w-100">
            {navLinks.map((item, index) =>
                <Nav.Link
                    key={index}
                    className={isActive(item.path) ? "m-3 active" : "m-3"}
                >
                    {/*
                        TODO: Handle sublinks
                    */}
                    <div onClick={() => handleNavigation(index)} >
                        {item.title}
                    </div>
                </Nav.Link>
            )}
        </Nav>
    </Navbar>
}

export default SideNav;

