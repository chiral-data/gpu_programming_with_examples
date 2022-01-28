import {
  Deck,
  Slide,
  Heading,
  Text,
  FlexBox,
  Box,
  FullScreen,
  Progress,
  SpectacleLogo,
  Notes,
  UnorderedList,
  ListItem,
  CodeSpan,
  OrderedList,
  Appear,
  Grid,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Link,
  Stepper,
  Quote
} from "spectacle";

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const theme = {
  fonts: {
    header: 'Roboto, "Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: 'Lobster, "Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const WelcomePage = ({ stars, caption, title, title2, subtitle }) => (
  <>
    <Heading margin="0px" fontSize="h3" color="primary">
      ✨ <i>{stars}</i> ✨
    </Heading>
    <Heading margin="0px" fontSize="h2">
      {caption}
    </Heading>
    <Heading margin="0px 32px" color="primary" fontSize="h3">
      {title}
    </Heading>
    {title2 && (
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        {title2}
      </Heading>
    )}
    {subtitle && (
      <Text margin="0px 32px" color=" gray" fontSize="42px">
        {subtitle}
      </Text>
    )}
  </>
);

const LectureOne = () => {
  return (
    <Deck template={template} theme={theme} transitionEffect="fade">
      {/* Slide: Welcome */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            stars="Coding Event at Engineer Cafe"
            caption="GPU Parallel Programming By Examples"
            title="Qin Wan"
            subtitle="Chiral Ltd."
          />
        </FlexBox>
      </Slide>
    </Deck>
  );
};

export default LectureOne;
