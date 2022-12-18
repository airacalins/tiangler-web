import { Row, Col, Form } from "react-bootstrap";
import PrimaryButton from "../../../app/components/buttons/PrimaryButton";
import HorizontalSpace from "../../../app/components/spacer/HorizontalSpace";
import { TEXT_INPUT_TYPE, SUBMIT, NAME, PRICE, COST, STOCKS, LOW_STOCK_LEVEL } from "../../../app/utilities/stringsConstant";

const ProductForm = () => {
    return <Row className="my-5">
        <Col md={{ span: 6, offset: 3 }}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Text>{NAME}</Form.Text>
                    <Form.Control
                        name="name"
                        type={TEXT_INPUT_TYPE}
                        onChange={evt => { console.log(evt.target.value) }
                        }
                    />
                </Form.Group>

                <div className="d-flex">
                    <Form.Group className="mb-3 w-100">
                        <Form.Text>{PRICE}</Form.Text>
                        <Form.Control
                            name="price"
                            type={TEXT_INPUT_TYPE}
                            onChange={evt => { console.log(evt.target.value) }
                            }
                        />
                    </Form.Group>

                    <HorizontalSpace width={5} />

                    <Form.Group className="mb-3 w-100">
                        <Form.Text>{COST}</Form.Text>
                        <Form.Control
                            name="cost"
                            type={TEXT_INPUT_TYPE}
                            onChange={evt => { console.log(evt.target.value) }
                            }
                        />
                    </Form.Group>
                </div>

                <div className="d-flex">
                    <Form.Group className="mb-3 w-100">
                        <Form.Text>{STOCKS}</Form.Text>
                        <Form.Control
                            name="stocks"
                            type={TEXT_INPUT_TYPE}
                            onChange={evt => { console.log(evt.target.value) }
                            }
                        />
                    </Form.Group>

                    <HorizontalSpace width={5} />

                    <Form.Group className="mb-3 w-100">
                        <Form.Text>{LOW_STOCK_LEVEL}</Form.Text>
                        <Form.Control
                            name="lowStockLevel"
                            type={TEXT_INPUT_TYPE}
                            onChange={evt => { console.log(evt.target.value) }
                            }
                        />
                    </Form.Group>
                </div>

                <PrimaryButton
                    label={SUBMIT}
                    onClick={() => { console.log('Submit') }}
                />
            </Form >
        </Col>
    </Row>;
}

export default ProductForm;