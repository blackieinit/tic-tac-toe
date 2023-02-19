import { Button, Col } from "react-bootstrap";
import SquareInterface from "../interfaces/Button.interface";

export default function Square({value, onSquareClick}: SquareInterface) {
    return (
        <Col md="4" className="d-grid gap-2 mt-5">
            <Button 
                variant="primary" 
                size="lg"
                onClick={ onSquareClick }
            >
                { value }
            </Button>
        </Col>
    )
}