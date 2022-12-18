import { Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavigationContainer from "../../app/components/container/NavigationContainer";
import Header5 from "../../app/components/text/Header5";
import Paragraph from "../../app/components/text/Paragraph";
import Small from "../../app/components/text/Small";
import { COST, GROUP, LOW_STOCK_LEVEL, PRICE, STOCKS } from "../../app/utilities/stringsConstant";

const ProductDetailsPage = () => {
    const { id } = useParams();

    return <NavigationContainer
        title="IPhone 14 Pro Max"
        contents={<>
            <Row >
                <Col lg={8}>
                    <Image className="w-100" src="data:image/jpeg;base64,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" />
                </Col>
                <Col>
                    <div className="mb-3 d-flex justify-content-between">
                        <Paragraph text={GROUP} />
                        <Paragraph text={'Mobile Phone'} />
                    </div>

                    <div className="mb-3 d-flex justify-content-between">
                        <Paragraph text={PRICE} />
                        <Paragraph text={"100.00"} />
                    </div>

                    <div className="mb-3 d-flex justify-content-between">
                        <Paragraph text={COST} />
                        <Paragraph text={"150.00"} />
                    </div>

                    <div className="mb-3 d-flex justify-content-between">
                        <Paragraph text={STOCKS} />
                        <Paragraph text={"10"} />
                    </div>


                    <div className="mb-3 d-flex justify-content-between">
                        <Paragraph text={LOW_STOCK_LEVEL} />
                        <Paragraph text={"3"} />
                    </div>
                </Col>

            </Row>
        </>
        }
    />
}

export default ProductDetailsPage;