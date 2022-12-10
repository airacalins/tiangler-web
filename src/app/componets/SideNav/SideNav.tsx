import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { CASH, CREDIT, EXPENSES, EXPENSE_PATH, HOME_PATH, INVENTORY, INVENTORY_PATH, LEDGER, LEDGER_PATH, ORDERS, ORDER_PATH, PAYMENT, POS, POS_PATH, PRODUCTS, PRODUCT_PATH, PURCHASES, PURCHASE_PATH } from "../../utilities/stringsConstant";

function SideNav() {
    const navLinks = [
        { id: 1, title: LEDGER, href: LEDGER_PATH },
        { id: 2, title: PRODUCTS, href: PRODUCT_PATH },
        { id: 3, title: POS, href: POS_PATH },
        { id: 4, title: ORDERS, href: ORDER_PATH },
        { id: 5, title: PURCHASES, href: PURCHASE_PATH },
        { id: 6, title: EXPENSES, href: EXPENSE_PATH },
        { id: 7, title: INVENTORY, href: INVENTORY_PATH },
    ]

    const ledgerSubLinks = [
        { id: 1, title: CASH },
        { id: 2, title: CREDIT },
        { id: 3, title: PAYMENT }
    ]

    return <Navbar>
        <Nav defaultActiveKey={HOME_PATH} className="flex-column w-100">
            {navLinks.map(({ id, href, title }) =>
                <Nav.Link
                    key={id}
                    href={href}
                    className="m-3"
                >
                    {title}
                </Nav.Link>
            )}
        </Nav>
    </Navbar>
}

export default SideNav;

