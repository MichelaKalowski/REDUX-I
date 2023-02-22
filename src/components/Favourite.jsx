import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Favourite = () => {
  const selectFav = useSelector((state) => state.content);

  return (
    <Container>
      <ListGroup>
        {selectFav.map((singleJob) => (
          <ListGroup.Item>{singleJob}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
export default Favourite;
