/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Grid, Image, Card, Icon, Divider } from "semantic-ui-react";
import "./home.css";

const Home = () => {
  const cards = [
    {
      src: `${process.env.PUBLIC_URL + "/assets/corousal.jpg"}`,
      name: "Matthew",
      date: "Joined in 2015",
      description: "Matthew is a musician living in Nashville.",
      social: "22 friends",
    },
    {
      src: `${process.env.PUBLIC_URL + "/assets/corousal.jpg"}`,
      name: "Matthew",
      date: "Joined in 2015",
      description: "Matthew is a musician living in Nashville.",
      social: "22 friends",
    },
    {
      src: `${process.env.PUBLIC_URL + "/assets/corousal.jpg"}`,
      name: "Matthew",
      date: "Joined in 2015",
      description: "Matthew is a musician living in Nashville.",
      social: "22 friends",
    },
  ];

  return (
    <>
      <div className="corousal-image">
        <Image
          src={process.env.PUBLIC_URL + "/assets/corousal.jpg"}
          as="a"
          href="#"
        />
        <div className="corousal-heading">
          <Container text>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
              elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
              leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            </p>
          </Container>
        </div>
      </div>
      <Divider />
      <div className="card-item">
        <Grid columns={3} divided>
          {cards.map((item) => {
            return (
              <Grid.Column>
                <Card>
                  <Image src={item.src} wrapped ui={false} />

                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>
                      <span className="date">{item.date}</span>
                    </Card.Meta>
                    <Card.Description>{item.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      {item.social}
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default Home;
