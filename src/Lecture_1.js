import {
  Deck,
  Slide,
  Heading,
  Text,
  FlexBox,
  Box,
  FullScreen,
  Progress,
  Notes,
  UnorderedList,
  ListItem,
  Grid,
  Image,
  CodePane,
  Link,
  Quote
} from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

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

const SourceLink = ({ text, url, desc }) => (
  <>
    <Text fontSize={30}>
      {text} <br />{" "}
      <Link fontSize={24} href={url} color="gray">
        {desc}
      </Link>
    </Text>
  </>
);

const SourceLinkNoText = ({ url, desc }) => (
  <>
    <Link fontSize={24} href={url} color="gray">
      {desc}
    </Link>
  </>
);

const WelcomePage = ({ stars, caption, caption2, title, title2, subtitle }) => (
  <>
    <Heading margin="0px" fontSize="h3" color="primary">
      ✨ <i>{stars}</i> ✨
    </Heading>
    <Heading margin="0px" fontSize="h2">
      {caption}
    </Heading>
    {caption2 && (
      <Heading margin="0px" fontSize={36} fontWeight={400} fontStyle={"italic"}>
        {caption2}
      </Heading>)
    }
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

const NumbaLogoLink = () => (
  <>
    <Link href="https://numba.pydata.org/">
      <Image
        src="https://numba.pydata.org/_static/numba-blue-horizontal-rgb.svg"
        width={400}
      />
    </Link>
  </>
);

const GoogleColabLogoLink = () => (
  <>
    <Link href="https://research.google.com/colaboratory">
      <Image
        src={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAACVCAMAAAA9kYJlAAABKVBMVEX/////ngH/2DX+wQf/ugf///77///9nwD/mwD8//35vWb7vWD537P8mgD9nQP5yX788Nz74Lr+//r76Mr//P/92TX+vgD53K3/1y//1zn5nwD8//j/vAD7wQD5//z9lwD9/PH4owD9swb9+tn78tb56HX73kT79ef92Cj7qiv50Y/+/Of62zD8+fH/1Dz72Dj75KL60lH3tUf68qb8rgD99Lf85s747Mn79sn38Jn842j+31n66oP74VH74EL2xnL8rzz5vFL57Xn82aD1sjP45K76w33764767ub7zpH899P78rP3xXH82BT602j97p73wzHzskD603T86rzv14r522L5y1n356X03Hb5wz32vyH3qyP924z444v777r9tVP0wl35vif8xlEzjs3rAAAVF0lEQVR4nO1dCVvbxtaWlxlpMBLOIBtZ8iKDwfKGWZprxwnE1Em5LIEkpGkKKbT3//+I74yMrZEtyaZX9Ot9Ou/TPiF4NJLfOevMOYokCQgICAgICAgICAgICAgICAgICAgICAgICPy9QPHkJ4IxQnHPPZ1dKksxz/43BWmtc6iReCfP/qs3mbq3bun/DEqlVVM2ZRemrKzQWOemGW0yuayZtX+IlEqramICoDTeucsZVZtMbmpZ9I+hVJEnX1tZwYsveAJIRtO8BcvGOvffGM9LqSIoFZTGAEFp7BCUxg5BaewQlMYOQWnsEJTGDkFp7BCUxg5BaewQlMYOQWnsEJTGDkFp7BCUxg5BaewQlMYOQWnsEJTGDkFp7BCUxg5BaewQlMYOQWnsEJTGDkFp7BCUxg5BaewQlMYOQWnsEJTGjn8epZNSbDStykZSRM078j5lVxA2PLqee3lKx3M/zrZUkXgYpd4TsnaLeJdxCSBEJR1R9yngZ8Keg4Y9BftQ1yU2HOnsF5QSPRZKYWV0ahF3Jl1HFpUI9ZaOB3dRAKXIvd59QvdeFvxArNAv9CxAYzHDxLJtGx5Awnp4swvj3ILHw5jaLRhOsI4IiUdKMSPBfQyYFm6gSxNKQy8JllKgELEJOrZVhj8xkxkrkoN4wZQN2/1X24PXO7njnaPB9unLFuhKsOjBL3VUO3wzGBzB2NeDwfbhFvwq6gbLUcrkqJzdePtwMGw0hgcna+s2jmTTRSClTD7qG5cnk5lW60DrYiJigavFEm4dvm5/MBiS8F8B/mwfXW9RjHSdexJXFjG27388bjtsbDLpXmM4xz++tFzT4RlmHktQSjCSSG2tIauKoiQ0WUsoilbNrOpYh+WipLbBYZ3rRpulFKwRGC179EmuKGwqmCehqNV3I2AV7Ap5ZmaBUIp0q7/ddpJ+FJJGuz142cGUes4LJLGMW6+O2rnk7HDD2TndAguAyJ+jlOqW1ctUNK7hhjGkme/eW9hCOm6qSuURauWSX2eeUg0oxWXJblYrmuxNI8sasPpTrSwRZmKfgckJdNBXTPoDxyh0C/MsAU9HFyCpk+HAF7av2yCVs5TmgOSu45y2QjzrIkqZ8P87A6LpI5RRqiXUhx4mRDqryFNoa2GUylkCPm10V5mZKJEwE0rCbNo43m7LgG+i063tD0ZuXuyA0kKuC6wOzqdWEkn2xY5RyOUKc/wnwQgUuk770KZ/RkohvhhVQU9lNkrmmdCYpDYpIU1tClWJoBSj7O8mDPLN8njnRGXYQyDzz8ElA4RKVKcXO7kCaHmyO8+pK36g/6/GMRJIUmvbAQGd5xPGddnQ5K4z2MISnXMpCyilkn1parIcQAMQrGja73XcVDya1TXuYp5SWavh9aHK1iExMxmoAMxvmiMLswgx0pv+SSAW+XXeOLlkIEdT6ds12tst6jqd/vGcxs+JtrNzqOv0aZRivXWgBtE50VlFe5cdeW2o4ZRqZna1qswp/ZRxZjSaIKd6oMX/72GV7c8lpxBNaRL0/MMFkVCZHoKXjxzqDi90r59MaesgSE8nUGVZrbzLmMtIqblWVWblc3a6ZgeD2j0HoxTXr9LpkgN+KIojMKgDm1BKr9sL+XTH59qn9mwkFU1p58R1z+FMgGypJufWIxTfVAPNhwcws2CaA0O9/w4sA7Wuivl8umS0gdMIttpOHwajV92FWu/KO0h1qQlp5dKUUnTJaT0YQcatBrbP1MCKymP5ZXHqEpROlwAucMMHJeFaaI5l9rcXz8Co+yhX+VS+WAROc1HiVzDegMNBFyB+ywmpc/tD+j32B3/hlELM0wTW/JJlmq5fVzTwWSz4mRW0RZQmIHRQVWZaTcYrY9d3g2oWx00qm47+Vkzl8/ki0/1I/3QMcRHtt435yDWQUqP0w+bmZs//ApNwSjGpVV2x4hmtqNW7h8zJuyokQAGKvJhS2U29qsOTk4dGVZt1fVplaMUdnrK0sZ8vpRjyY3vK6a4v6swZLyWC7COwDctIac5IMUY3P7Z8zxyh+DZz9rxiympjbb0O64hop9b8FOC+F1IK+UH1ZKNmIwJKUH9xWQU74mPcN0E8gBz4NjVG3uW0vQtcdnOQrTu5SXZUyO3CX7bZU7/xufoCi0ELScdgeb7jsKCUJQbsCpBRoDSdTn+GhMezpyGUQqqBR17GJINEyqo5sr0HxfrNp4o5I6iLKFVl9aTn7TZg3II4gLMuMiSnWYnGuzGl48+p1JRTsKdOLpcDdl6/ub4+vD4dtA1XKkFeu1vAf9+Z8V/AufHhaPu3Qxj85uiDYcBqMOEGGWVCCpTmb+AuU3saJqW0XG/IUwlSZFOpnGQxlypgC9Mvc4obSakMiecG287z9tEwWr/T1OnagWl1HyJWc0pqpTzHqav7xtEFhPSwpmyv6eV224EQ03AuMNXto+SsB3N2fjwfrzLG9Px0h5njXNuZyGg6vfmRWp6HCqYUEQlvKOZUejRZ0S4JdncVvcWXpJuZ3H8Bpeq7HsZ+urBUH3ImFWItrRYnn+wW+ykOIKfF0vEF1eEr4sdNc+t84CRZSIos6cKZzerbpy3mf6h7SGLpUutVm8luaSKjaYgk9nS0SEox6gw5Zwwm8C2FdJ6LGgk75sCrfrcfSammNUDOqY9TooPyD704zFSqlTWK49qRAiaI3s+nfMgXv9V16h6QSI+nErRzfWy0zxljx8bUNRkFZzfpHN0jTpDci/pHhlPanDDK8NH2hoRQSvG6ybOROLEDnhiWemRqpqf9EQkpmONqDwdpNMlW+WVR7uoxOn244c/5vF9Mrx9PvR5HIHYMRO+7pyAxUt8xppsqhVx71xi0fBv+bDTFrcHUjj7ihiyiVMI/+QSsWgvaG0RSmWZkZRlKwUKYIxyYwCO8YfI2WVuNj1Jws61bv5CmrjHS/dYaU/DG/TqMxgPmyT137xy18OwOHqI6sr9upnlGN7+WFyp+vcF9yYQyCtxuhbuBiC2XkCYqJ/bcDsN4GLUyGpdHqZcotv19WJxfUqUUJ6b5b2BFZ84dwTxQcA0WJna7ze2s5IzjmkRmFxjshC7Vf+UIZfbUOwAOo7RmevtLCWVYD1RZ9mB0TV1GSkFMb6SyHih/RFr3paaNelweH2GKrzi9h4D/Yyv8OJTgC98ZSs44DJ2672M0vbnHuHMnDqQU7jmqmB4ZWlMK3XPD61XP60cp/tAO/+ZMTL1AKr4qCiRZ9duUz5TesE3gEFBp28/oIFCSALotffMJ6ebVNPQLoZReKhyl4KmDT64YyMMyig/LEq7NiKx6oq5p2moES08CyMZNiqe0tE9p4OnGeDjd8SVOTt8KLZkgW6UiT+qtPTEmIZTaD7zKPsBzhD4GPltmC1o2Ax3c4+1wlsvDtPiSUviSe/4Q6hf31yHDyVbXl9sfhQs00ulVnuc0P33zZTClkj30hDShrWE9PFIkvWW2oLW7TvjjgX4eaKY3SSa+42f83cdoqRU5uu/boDYOo2o2yE2epWJT1b+ZfBDinloNzldHKyIfHIRTqp5IEaERQpcqZz4OaGw5Kb3yxaT7wQ5ygkOfd3LOI6s/OpDncnK6N/l9CKU1PtCP0Fl36uE0Uo+Q0rUoSiWpOTWmsqYMO3FRijsffZT+Fj3vqY/SnVbEAiBSLqVKnpxufpl8Ekwp7nHberIZ5YEh3H9YhtJmmPMcY6SaU0q1RnyU2n5K30c+BX7DK74xoBGHi4jgfbYLO5XT7xPyQqR03QtqNLlRj3iMJSlVR9GUvuD3XyJv+CQApT739ARKC2z3NHw0+NSrvLtj4FrSdPrz5JMQSl/w5xcLviHOLGFLtYWUevdT/mcoZbuG+UdKryafhFDak73dIbkR7SbLmSVCfVD8SFv6lDV8AmYUP/U+erSf0gGNpFT6+rhaY3u6QErxOrddDyFl5IPQhyWkVG1Gu6dVLg5WG3bkDZ8AYu/yUlrai17YU58tPbZJaGBKdYo+Pp5opVxKv+Co7Il5fE++EvJ61EMjOlxG8dcWuSdvEtfjxwOEfva5p69WZH3QocOH+u2tKIdvdUqpR0pde7oXmZCyuNQTGkXeiHpoUm8s4Z4S0eE7OuMKqxInsW2bzIb6H+dqQ3jofX9cehFe+IaI1OPmBU7vF1DKxZoJRYtMEPnN6ghKG/WoqnWywqmFehl1v6ehvOdLnvL3UYPxlo9SYyCFWStgj35Llzj53zyPphSRB8ULveWHqCNLslSZmaxFBbfYbnjGO8aDZySRe5/HL11BpBmqzrp95MvxIX0KmxhbnZLPSt/ak8/C9kvXKpPvKCeUaja8lwaRzFL7peMoKujbsAPuF9xBl2y+CCfpiUAo69uATpX6rIY9bDge8GJaaG+HnYJZevlL0Sf+X6cEhVG6oXLHo0BH6FYUrlWXqS+FxN0KyZixVC5fcqdP7Cg/LlBJ/9knpsV9Wg7tCaJ+/2R0nX5YISGpl0o8pem9RZSyI7aJlCqmErF9jJvaMlIqu3FD4PMRHWer3q6+nHjXie3wiUj4S94TU8jJixFpPpVafNV5odCGNB/N7a8ybaP7/p3t/Nb047DjvM5wso9hKqaqbQT6Prf+usofTodTqmorNPhsANzy24o53TZRtMsYu3bYVrEnT+6ZyQ0rIPVJH6I2ZfUiVMLHuRxXvwPhfsftxfPRSkAIvvkCCRB+rxcq9ND5TOOifeVdHYRpTvfZRuclXygedfYkm6vlAOmDKfQb/jRW1noxtuvAI+7nfY4kX3rPOpz8i0uk/iErcMMXzi5nTrs556qDEfF/cyrZ30t5Xu9T+feeyIVR6p6weeZUWbF0MmerQb5W3er7JSh1z1vmF4UN4zZn2RwNO2qX8um48X/5fKr4hfNQbq8t1i+OnHvQcWwf8/U7OSP/w9esxG1IjTsjmH32L1OHLDp0RpJ9wh0Eg4dqlon/LJgVaeD1qsLXRUVXm1RO5mJTVnJmP/hqTNkZQnx8gj6X9zmJYjvxxdSg/1hz6bYaY9I6bRtJdmQv4WsuJ805rNrx4709KdNySyro/a8z9Sup/HfsFVuESSmRVlnB8vR7JljR97R1bTw7Qet3rJR5OSlNJKrA6eO107ZtjGHtNP6A26xFp65PBr4vepQW0/l0yjDa2+etiXmhW692gMeu84bqtt7a8Tgd1+ali1/vW+OxWKKtm31wcj7BZ0GpvqjMjBFmD/0VtdplBxPWRoPGrcIUdzaq/urQBZRqCfVTr0yl8WkrZmUcmNQ+8XeRNe0tt+BxAOnkKjUhgRVDplg7k+Ecvbnon2+d358Oxs0juWT7JYZvdeG4nBa6uUm1I9iK2897/VqtdvPL591Sfk5GU3vg2xYW8CD3I19dlPJutYMx1pnVIASTXkZTZvpNFlAKWYN5lsV40nKOcevMVPhNL01j9aXxFkOW0dbto4Niap9i5fpuhSlr1Gu7BOYYyaD6W+Cn6LYx0frNcbXjZhoEEcIG9/88+3nGkO77ymgiqqDLGZ5RVgStHYyyjFVS7vRGGRBi08/oopJd9o8Tmo3LjX+z9nPg8+anO8X0eXu50sQWjbdRB3Rhb7JllC/m3QaIAiu6dXscCuMIlDmlnDFgpYnnxzm3Uy81rR9Np4sgmo9zlFK8mLJf3tbYGdUiW+oywmr1E7w5TSiqOTxZuVx5GJqKImuK7KdsUX1pYlypKjcOMisrmYOGynogODsKidMni3nB2NtKPhdT43LdVFTfU844ZF3dfSdX8GT0kdOU33zyQvqL3/iHUwp6OVLNuWp7JaGMO7+DEJU9+SdR1bl+FBniimrteTrJOvtFVqvr2tEISnO5c/aaiOsPXWO22nHWgD4KKRjp32aqHKKklOC3mrqgo25ZSpeArCrqxvO87kBH9d1HzxTZKlJIHrG6Put0RkbHchokoqnUNzrT8x5BKSUUPZizXeN/mlKfJ5MDOn01xfyul+MrhOSfhOqtffBMrPEhSkoLSecUFkCyr+YYZfY0QEqL31hD4ZKKz34m1hDcfqicyvCZojX43ePwMrM7lXm4kJlYbCGrTR3TmIPSKVD2a8roBjTX80IKQvyhDym8REeb6T9mKJ3Vfeb3gdG5Oy1qHrdO1IQS1vypgZMyR81ltqAT5r9+H0cIgZOZaqKqnD1fPz6iOq5vO4Xo1lAIT43XfQk0GVvv07NSOqf7EATsUX2upDeaUgsi2LfzLsqjULtbxU2ukDGUUkXOojUtxKux5l5Wd64/iyF1KWWly/bpsVMIeb2Biy5rx8fsBU46wuf7c5T6OIXk4dc+RuU5MVgkpVjCG41A1Xf/Ze1MFktLveIgoWUp2rgLtszsX9E+6M3t+MTMKqVSf2AYBccNQ302lFlYyJaSxy9ZIw7rdwDra3+/dWse/LrvxlJusF/6xtLU+VRvlZMcZWXuY7d/orZiqm4PuTbuTR43O2ma1hjRMpG4+tKE/9gow0mlDOTj7KXblK+xizkLoKqNs874yzwjpSyRtg+PnHGy5DOqjGPDOD71KtrZxjOuXQGjedbXxMtpvgShU7501ZOCiwJWVXXy762r6u+B3QmQN/YugVTW7g0JkOa+NiNRURvNDqbgHpuqNnlZjKzyx/Uk471IRjNrmFoY9TJseUyTtTjL7lto4P+7tVZws8kzoAWkGrsFX99trpuEnJ+9KorbvwTxQ7j2+Q/WeLvpl1PITK96ZSzNb/i7d1h94WE9aMj41X3Z5glorapqmqIAu8rdykYHQTaOLSnLT1HjmjVIj/tklbqeFH65dgCprcreEaVoFXBZmY0W1he+xysWIBZD2n23E3SSRrndtjtvXraIxL1Ug/1AIOqntfdXt3le94ul26trto2F5t8UM74UcwgsyEeYABsYd7KrZ2uZh+Fw+HB59qJOyhbr0GP9b9Pr2eaX/1LJ+4y62yEUbmjXNs5W2EQHmbXRTR3mYS/I+Yuk1E3GW+eH24OddheMaHfnaPuw34LHcoWHp3TyY/3m+9V//oC4NJ2//c/Vl5saGxy+DzHT/xM6jOWn7g4Sdev2MQuIEZq5ZObvaO5Drx0X0giYiMwP+0ugs2qp1hbDeUtaGAqDPbBata3zWrZu62xJ/h8e+e8OaiOvV8d9S2QUR6wHZfwCPranSdBfqFH/O2DmiqDxuRN53FOPHu8ek7ry6VpHwamAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMA/Hv8HU+oqw2pcmfIAAAAASUVORK5CYII="
        }
        width={200}
      />
    </Link>
  </>
);

const SketchSimilaritySearch = () => (
  <>
    <Box width={550} height={270} overflow={"hidden"}>
      <Image
        position={"relative"}
        top={-50}
        left={-20}
        src="https://miro.medium.com/max/1400/0*LtCn9l019IeLViyP"
        width={600}
      />
    </Box>
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
            caption2="The Bandwidth of Parallel Computing"
            title2="Qin Wan"
            subtitle="chiral.co.jp@gmail.com"
          />
        </FlexBox>
      </Slide>

      {/* Slide: Prerequisites */}
      <Slide>
        <Heading textAlign={"left"}>Before We Start ...</Heading>
        <UnorderedList>
          <ListItem>Event pages</ListItem>
          <UnorderedList>
            <ListItem>
              <Link>https://engineercafe.jp/ja/event/3495</Link>
            </ListItem>
            <ListItem>
              <Link>https://chiral-data.github.io/docs/training_gpu</Link>
            </ListItem>
          </UnorderedList>
          <ListItem>Coding session requires</ListItem>
          <UnorderedList>
            <ListItem>a laptop</ListItem>
            <ListItem>
              a google account for coding on{" "}
              <Link href="https://colab.research.google.com">Google Colab</Link>
            </ListItem>
            <Notes>Switch to browser to show how to access Google Colab</Notes>
            <ListItem>basic understanding of Python</ListItem>
          </UnorderedList>
        </UnorderedList>
      </Slide>

      {/* Slide: Questions */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage stars="Feel Free to Ask Questions" />
        </FlexBox>
      </Slide>

      {/* Slide: Contents */}
      <Slide>
        <Heading textAlign={"left"}>Contents</Heading>
        <UnorderedList>
          <ListItem>History of GPU Programming</ListItem>
          <ListItem>CUDA and Numba</ListItem>
          <ListItem>Code Session: The Bandwidth of Parallel Computing</ListItem>
          <ListItem>Wrap-up and Discussion</ListItem>
        </UnorderedList>
      </Slide>

      {/* Slide: GPU for Graphics */}
      <Slide>
        <Heading textAlign={"left"}>GPU for Graphics</Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <Box>
            <UnorderedList>
              <ListItem>Applications from gaming and design</ListItem>
              <ListItem>The technique of ray tracing</ListItem>
              <ListItem>A solution of parallelism</ListItem>
            </UnorderedList>
            <Box position="relative" top="3%" left="8%">
              <CodePane
                language="python"
                theme={tomorrow}
                maxWidth="50%"
                showLineNumbers={false}
                overflowX="scroll"
              >
                {`
for all pixels (i,j) in image:
    From camera eye point,
      calculate ray point and direction in 3d space
    if ray intersects object:
      calculate lighting at closest object point
           store color of (i,j)
Assemble into image file
        `}
              </CodePane>
              <Box height={20} />
              <SourceLinkNoText
                url="http://courses.cms.caltech.edu/cs179/"
                desc="algorithm source: Caltech CS179 GPU Programming"
              />
            </Box>
          </Box>
          <FlexBox
            position="relative"
            left={-450}
            flexDirection="column"
            paddingTop={0}
            key="pic-ray-tracing"
            flex={1}
          >
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Recursive_raytrace_of_a_sphere.png/220px-Recursive_raytrace_of_a_sphere.png"
              }
              width={400}
            />
            <SourceLink
              text="Recursive Ray Tracing"
              url="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)"
              desc="image source: wikipedia"
            />
          </FlexBox>
        </Grid>
      </Slide>

      {/* Slide: Bandwidth Throughput */}
      <Slide>
        <Heading textAlign={"left"}>Bandwidth / Throughput</Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <Box>
            <UnorderedList>
              <ListItem>An example from graphics</ListItem>
              <UnorderedList>
                <ListItem fontSize={28}>
                  Size of image: 640 x 480 pixels
                </ListItem>
                <ListItem fontSize={28}>Channels of color: 4</ListItem>
                <ListItem fontSize={28}>Frame rate: 30 fps</ListItem>
              </UnorderedList>
              <ListItem>Questions</ListItem>
              <UnorderedList>
                <ListItem fontSize={28} color="secondary" fontWeight={400}>
                  What is the requirement for bandwidth?
                </ListItem>
                <ListItem fontSize={28} color="secondary" fontWeight={400}>
                  What is the reality for a Colab environment?{" "}
                </ListItem>
              </UnorderedList>
            </UnorderedList>
          </Box>
          <FlexBox
            flexDirection="column"
            paddingTop={50}
            key="pic-fps"
            flex={1}
          >
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Animhorse.gif/220px-Animhorse.gif"
              }
              width={400}
            />
            <SourceLink
              text="Animated Carton at 12 fps"
              url="https://en.wikipedia.org/wiki/Frame_rate"
              desc="gif source: wikipedia"
            />
          </FlexBox>
        </Grid>
      </Slide>

      {/* Slide: Coding Session Break */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            stars={"Coding Session"}
            caption={"The Example of Bandwidth"}
          />
          <GoogleColabLogoLink />
        </FlexBox>
      </Slide>

      {/* Slide: GPU Specifications */}
      <Slide>
        <Heading textAlign={"left"}>GPU Hardware Specifications</Heading>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap={15}>
          <Box>
            <Text fontSize={30}>Processor Capability</Text>
            <Text fontSize={30}>Memory Size</Text>
            <Text fontSize={30}>Memory Bandwidth</Text>
            <Text fontSize={30}>Power</Text>
            <Text fontSize={30}>NVIDIA Compute Capability</Text>
          </Box>
          <Box>
            <Text fontSize={30}>19.5 TFLOPS</Text>
            <Text fontSize={30}>40GB</Text>
            <Text fontSize={30}>1.555GB/s</Text>
            <Text fontSize={30}>250W</Text>
            <Text fontSize={30}>8.0</Text>
          </Box>
          <FlexBox
            flexDirection="column"
            paddingTop={50}
            key="pic-fps"
            flex={1}
          >
            <Image
              src={
                "https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/a100/nvidia-a100-hgx-3qtr-front-left-2c50-d.jpg"
              }
              width={400}
            />
            <SourceLink
              text="NVIDIA A100"
              url="https://www.nvidia.com/en-us/data-center/a100/"
              desc="image source: NVIDIA"
            />
          </FlexBox>
        </Grid>
        <SourceLinkNoText
          url="https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf"
          desc="source: NVIDIA Ampere Architechture Whitepaper"
        />
      </Slide>

      {/* Slide: Parallelism vs Concurrency */}
      <Slide>
        <Heading textAlign={"left"}>Parallelism vs Concurrency</Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Text color="secondary" fontWeight={600}>
              Parallelism
            </Text>
            <Text color="secondary" fontSize={28}>
              Purpose <br />
              improve throughput
            </Text>
            <Text color="secondary" fontSize={28}>
              Mechanism <br />
              homogeneous tasks performed simutaneousely
            </Text>
            <Text color="secondary" fontSize={28}>
              Keywords <br /> multiple processor, new hardware, a large number
              of tasks, bandwidth, throughput
            </Text>
          </Box>
          <Box backgroundColor="secondary">
            <Text fontWeight={600}>Concurrency</Text>
            <Text fontSize={28}>
              Purpose <br />
              improve efficiency, decrease reponse time
            </Text>
            <Text fontSize={28}>
              Mechanism <br />
              heterogeneous tasks organized in a proper way to be preformed
            </Text>
            <Text fontSize={28}>
              Keywords <br /> single processor, various types of tasks, thread
              switching
            </Text>
          </Box>
        </Grid>
        <Box height={20} />
        <SourceLinkNoText
          url="https://www.cs.princeton.edu/~dpw/courses/cos326-12/lec/15-parallel-intro.pdf"
          desc="source: parallelism and concurrency"
        />
      </Slide>

      {/* Slide: Coding Session Break */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            stars="Coding Session"
            caption={"The Example of Bandwidth (part 2)"}
            title={"1. JIT Python"}
            title2={"2. Parallelism with CPU"}
          />
          <NumbaLogoLink />
        </FlexBox>
      </Slide>

      {/* Slide GPU - History of GPU Programming */}
      <Slide>
        <Heading textAlign={"left"}>History of GPU Programming</Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <Box>
            <Text fontSize={36} fontWeight={700}>
              More and More Open Programming Models
            </Text>
            <UnorderedList>
              <ListItem fontSize={32}>
                Fixed function{" "}
                <SourceLinkNoText
                  url="https://en.wikipedia.org/wiki/Fixed-function"
                  desc="wikipedia"
                />
              </ListItem>
              <ListItem fontSize={32}>
                Shaders{" "}
                <SourceLinkNoText
                  url="https://en.wikipedia.org/wiki/Fixed-function"
                  desc="wikipedia"
                />
              </ListItem>
              <ListItem fontSize={32}>
                API for General Purpose Processing
              </ListItem>
              <UnorderedList>
                <ListItem fontSize={24}>
                  NVIDIA CUDA, first release in June 2007,{" "}
                  <SourceLinkNoText
                    url="https://docs.nvidia.com/cuda/index.html"
                    desc="documents"
                  />
                  ,{" "}
                  <SourceLinkNoText
                    url="https://developer.nvidia.com/cuda-zone"
                    desc="official tutorials"
                  />
                </ListItem>
                <ListItem fontSize={24}>
                  AMD ROCm, first release in November 2016,{" "}
                  <SourceLinkNoText
                    url="https://rocmdocs.amd.com/en/latest/"
                    desc="documents"
                  />
                  ,{" "}
                  <SourceLinkNoText
                    url="https://developer.amd.com/resources/rocm-learning-center/#getting-started"
                    desc="official tutorials"
                  />
                </ListItem>
                <ListItem fontSize={24}>Directives: OpenMP, OpenCL</ListItem>
              </UnorderedList>
            </UnorderedList>
          </Box>
          <Box>
            <Text fontSize={28} fontWeight={700}>
              Application: Revival of Neural Networks
            </Text>
            <Box paddingLeft={150}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ImageNet_error_rate_history_%28just_systems%29.svg/220px-ImageNet_error_rate_history_%28just_systems%29.svg.png"
                width={350}
              />
            </Box>
            <Box position="absolute" top="65%" left="68%">
              <Text color="secondary" fontSize={24}>
                AlexNet: a fast GPU-implementation of a CNN written with CUDA
              </Text>
            </Box>
          </Box>
        </Grid>
      </Slide>

      {/* Slide CUDA */}
      <Slide>
        <Heading textAlign={"left"}>CUDA for GPU Computing</Heading>
        <Grid gridTemplateColumns="1fr" gridColumnGap={15}>
          <FlexBox flexDirection="column" paddingTop={-20} flex={1}>
            <Box maxHeight={540} overflowY={"hidden"} marginBottom={10}>
              <Image
                src="https://docs.nvidia.com/cuda/cuda-c-programming-guide/graphics/gpu-computing-applications.png"
                width={800}
              />
            </Box>
            <SourceLinkNoText url="https://docs.nvidia.com/cuda/cuda-c-programming-guide/" desc="source: CUDA C++ Programming Guide" />
          </FlexBox>
        </Grid>
      </Slide>

      {/* Slide: Coding Session Break */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            stars={"Coding Session"}
            caption={"The Example of Bandwidth (Part 3)"}
            title={"Parallelism with GPU"}
          />
          <NumbaLogoLink />
        </FlexBox>
      </Slide>

      {/* Slide CUDA Programming Model: hybrid computing */}
      <Slide>
        <Heading textAlign={"left"} fontSize="h2">
          CUDA Heterogeneous Programming
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <FlexBox flexDirection="column">
            <Text fontSize={36}>Host/Device Memory Transfering</Text>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/CUDA_processing_flow_%28En%29.PNG"
              height={420}
            />
            <Box height={20} />
            <SourceLinkNoText
              url="https://en.wikipedia.org/wiki/CUDA"
              desc="source: wikipedia"
            />
          </FlexBox>
          <FlexBox flexDirection="column">
            <Text fontSize={36}>Host/Device Execution Code</Text>
            <Image
              src="https://docs.nvidia.com/cuda/cuda-c-programming-guide/graphics/heterogeneous-programming.png"
              height={420}
            />
            <Box height={20} />
            <SourceLinkNoText
              url="https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#heterogeneous-programming"
              desc="source: cuda toolkit documentation"
            />
          </FlexBox>
        </Grid>
      </Slide>

      {/* Slide: Behind @numba.vectorize */}
      <Slide>
        <Heading textAlign={"left"} fontSize="h1">
          Behind @numba.vectorize ...
        </Heading>
        <Box position="relative" top="-5%">
          <Text fontSize={36}>
            kernel; thread, block, grid; CUDA core, streaming multiprocessor
            (SM).
          </Text>
        </Box>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <FlexBox flexDirection="column" position="relative" top="-10%">
            <Image
              src="https://developer-blogs.nvidia.com/wp-content/uploads/2020/06/kernel-as-function.png"
              height={420}
            />
          </FlexBox>
          <FlexBox flexDirection="column" position="relative" top="-10%">
            <Image
              src="https://developer-blogs.nvidia.com/wp-content/uploads/2020/06/kernel-execution-on-gpu-1-625x438.png"
              height={420}
            />
          </FlexBox>
        </Grid>
        <Box paddingLeft={120}>
          <SourceLinkNoText
            url="https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/"
            desc="source: CUDA Refresher: The CUDA Programming Model"
          />
        </Box>
      </Slide>

      {/* Slide: More on Streaming Multiprocessor */}
      <Slide>
        <Heading textAlign={"left"} fontSize="h2">
          More on Streaming Multiprocessor (SM)
        </Heading>
        <Grid
          position="relative"
          top="6%"
          gridTemplateColumns="1fr 1fr 1fr"
          gridColumnGap={15}
        >
          <FlexBox flexDirection="column">
            <Image
              src="https://developer-blogs.nvidia.com/wp-content/uploads/2020/06/memory-hierarchy-in-gpus-2.png"
              height={280}
            />
            <Box height={40}>
              <Text fontSize={24} textAlign="center">
                SM in Sketch
              </Text>
            </Box>
          </FlexBox>
          <FlexBox flexDirection="column">
            <Image
              src="https://developer.nvidia.com/blog/parallelforall/wp-content/uploads/2016/04/gp100_SM_diagram-624x452.png"
              height={280}
            />
            <Box height={40}>
              <Text fontSize={24} textAlign="center">
                The Pascal GP100 SM <br /> 64 CUDA cores /SM{" "}
              </Text>
            </Box>
          </FlexBox>
          <FlexBox flexDirection="column">
            <Image
              src="https://developer.nvidia.com/blog/parallelforall/wp-content/uploads/2016/04/gp100_block_diagram-1-624x368.png"
              height={280}
            />
            <Box height={40}>
              <Text fontSize={24} textAlign="center">
                The Pascal GP100 Block Diagram <br /> GPU Product: Tesla P100{" "}
                <br /> 56 SMs, 3584 CUDA Cores{" "}
              </Text>
            </Box>
          </FlexBox>
        </Grid>
        <Box height={150} />
        <Box paddingLeft={0}>
          <SourceLinkNoText
            url="https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/"
            desc="source: CUDA Refresher: The CUDA Programming Model"
          />
        </Box>
        <Box paddingLeft={0}>
          <SourceLinkNoText
            url="https://developer.nvidia.com/blog/inside-pascal/"
            desc="source: NVIDIA Developer Blog: Inside Pascal"
          />
        </Box>
      </Slide>

      {/* Slide: Writing CUDA Kernels, Code Demo */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="0px" fontSize="h2">
            Writing CUDA Kernels
          </Heading>
          <Box height={0} />
          <CodePane language="python" showLineNumbers={false}>{`
# Kernel declaration
@cuda.jit
def increment_by_one(an_array):
    # Thread id in a 1D block
    tx = cuda.threadIdx.x
    # Block id in a 1D grid
    ty = cuda.blockIdx.x
    # Block width, i.e. number of threads per block
    bw = cuda.blockDim.x
    # Compute flattened index inside the array
    pos = tx + ty * bw
    if pos < an_array.size:  # Check array boundaries
        an_array[pos] += 1

# Kernel invocation
threadsperblock = 32
blockspergrid = (an_array.size + (threadsperblock - 1)) // threadsperblock
increment_by_one[blockspergrid, threadsperblock](an_array)
        `}</CodePane>
        </FlexBox>
        <Box paddingLeft={0} paddingTop={15}>
          <SourceLinkNoText
            url="https://numba.readthedocs.io/en/stable/cuda/kernels.html"
            desc="source: Numba for CUDA GPUs"
          />
        </Box>
      </Slide>

      {/* Slide: Coding Session Break */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            stars="Coding Session"
            caption="The Example of Bandwidth"
            title="Parallelism Comparison: CPU vs GPU"
          />
          <Box height={80} />
          <NumbaLogoLink />
        </FlexBox>
      </Slide>

      {/* Slide: Final Project */}
      {/* <Slide>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            stars="Final Project"
            caption="Molecular Similarity Search"
          />
        </FlexBox>
      </Slide> */}

      {/* Slide: Similarity Search */}
      {/* <Slide>
        <Heading textAlign={"left"} fontSize="h1">
          Similarity Search
        </Heading>
        <Grid
          gridTemplateColumns="1fr 1fr"
          gridColumnGap={15}
        >
          <Box>
            <Text fontWeight={700}>Molecular Fingerprint</Text>
            <Box paddingLeft={30}>
              <Image
                src="https://www.surechembl.org/images/HashedFingerprint.png"
                width={550}
              />
            </Box>
            <Box height={20} />
            <SourceLinkNoText
              url="https://www.surechembl.org/knowledgebase/84207-tanimoto-coefficient-and-fingerprint-generation"
              desc="image source: SureChEMBL"
            />
          </Box>
          <Box>
            <Text fontWeight={700}>
              Tanimoto Coefficient <br /> or Jaccard Index
            </Text>
            <Box paddingLeft={30}>
              <SketchSimilaritySearch />
            </Box>
            <Box height={20} />
            <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
              <Box
                backgroundColor="white"
                paddingTop={10}
                marginLeft={40}
                marginTop={30}
                height={60}
              >
                <Image
                  src="https://wikimedia.org/api/rest_v1/media/math/render/svg/eaef5aa86949f49e7dc6b9c8c3dd8b233332c9e7"
                  width={350}
                  backgroundColor="white"
                />
              </Box>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Intersection_of_sets_A_and_B.svg/200px-Intersection_of_sets_A_and_B.svg.png"
                width={150}
              />
            </Grid>
            <Box height={20} />
            <SourceLinkNoText
              url="https://www.gsitechnology.com/Molecular-Similarity-Search-A-Simple-but-Powerful-Drug-Discovery-Tool"
              desc={"image source: GSI"}
            />
          </Box>
        </Grid>
      </Slide> */}

      {/* Slide: Data Preparation */}
      {/* <Slide>
        <Heading textAlign={"left"} fontSize="h1">
          Data Preparation
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <Box>
            <Text fontWeight={700}>Data Source</Text>
            <Box
              marginLeft={40}
              paddingLeft={40}
              paddingTop={10}
              backgroundColor={"white"}
              width="80%"
            >
              <Link href="https://www.ebi.ac.uk/chembl/">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Chembl_logo.png"
                  width={200}
                />
              </Link>
            </Box>
            <Quote fontSize={24}>
              chembl_id canonical_smiles standard_inchi standard_inchi_key
              <br />
              <br />
              CHEMBL153534 Cc1cc(-c2csc(N=C(N)N)n2)cn1C{" "}
              InChI=1S/C10H13N5S/c1-6-3-7(4-15(6)2)8-5-16-10(13-8)14-9(11)12/h3-...
            </Quote>
          </Box>
          <Box position={"relative"} left={"20%"}>
            <Text fontWeight={700}>Fingerprint Generation</Text>
            <Box
              marginLeft={40}
              paddingLeft={30}
              paddingTop={10}
              backgroundColor={"white"}
              width="8%"
            >
              <Link href="http://rdkit.org/">
                <Image src="http://rdkit.org/Images/logo.png" width={80} />
              </Link>
            </Box>
            <Quote fontSize={24}>
              <Box maxWidth={"50%"} overflow={"hidden"}>
                <CodePane language="python" showLineNumbers={false}>{`
                  from rdkit import Chem
                  from rdkit.Chem import AllChem

                  def smiles_to_fingerprint(smiles: str) -> np.array:
                    mol = Chem.MolFromSmiles(smiles)
                    fp = AllChem.GetMorganFingerprintAsBitVect(
                      mol,2,nBits=1024)
                    return np.frombuffer(
                      fp.ToBitString().encode(), 'u1') - ord('0')
                  `}</CodePane>
              </Box>
            </Quote>
          </Box>
        </Grid>
      </Slide> */}

      {/* Slide: Coding Session Break */}
      {/* <Slide>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage stars="Coding Session" caption="Final Project" />
        </FlexBox>
      </Slide> */}

      {/* Slide: Wrap-up */}
      <Slide>
        <Heading textAlign={"left"}>Wrap-ups</Heading>
        <UnorderedList fontSize={36}>
          <ListItem>Bandwidth and throughput are important factors of parallel computing.</ListItem>
          <ListItem>Parallelism and concurrency</ListItem>
          <ListItem>Data transfer between devices (Host/GPU) </ListItem>
          <UnorderedList fontSize={32}>
            <ListItem>
              It could be the "I/O" bottleneck for a program involving gpu codes.
            </ListItem>
            <ListItem>
              It should be carefully taken into account for program
              architechture.
            </ListItem>
          </UnorderedList>
          <ListItem>
            Choose any technology of GPU Programming that fits best your
            application (Python, C/C++, Fortran ...).
          </ListItem>
        </UnorderedList>
      </Slide>
    </Deck>
  );
};

export default LectureOne;
