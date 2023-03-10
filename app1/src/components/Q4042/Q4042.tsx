/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Button, SvgIcon } from '@mui/material';
import { ReactComponent as ArrowForwardFilled1 } from 'src/newassets/images/_ArrowForwardFilled.svg';
import { styled } from '@mui/material/styles';
import HeroImageImage from 'src/newassets/images/4042_Hero.png';
import FillHeroImageImage from 'src/newassets/images/undefined';
import { Q4042Props } from 'src/types';
import useQ4042 from 'src/components/Q4042/useQ4042';

const ScreenDesktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === 'ScreenTablet'
      ? `row`
      : data.currentVariant === 'ScreenMobile'
      ? `row`
      : `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
}));

const Hero: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundImage:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `url(${HeroImageImage})`,
  backgroundPosition:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `center`,
  backgroundSize:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `cover`,
  backgroundRepeat:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent:
    data.currentVariant === 'ScreenMobile' ? `center` : `flex-start`,
  alignItems: data.currentVariant === 'ScreenMobile' ? `center` : `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf:
    data.currentVariant === 'ScreenTablet'
      ? 'unset'
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `stretch`,
  height: `878px`,
  margin: `0px`,
  overflow: `hidden`,
  flexGrow:
    data.currentVariant === 'ScreenTablet'
      ? `1`
      : data.currentVariant === 'ScreenMobile'
      ? `1`
      : 'unset',
}));

const FillHero: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'ScreenTablet'
      ? `0px 0px 100px 0px`
      : data.currentVariant === 'ScreenMobile'
      ? `0px 0px 220px 0px`
      : `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flexGrow: `1`,
  margin: `0px`,
  backgroundImage:
    data.currentVariant === 'ScreenTablet'
      ? `url(${FillHeroImageImage})`
      : data.currentVariant === 'ScreenMobile'
      ? `url(${FillHeroImageImage})`
      : 'unset',
  backgroundPosition:
    data.currentVariant === 'ScreenTablet'
      ? `center`
      : data.currentVariant === 'ScreenMobile'
      ? `center`
      : 'unset',
  backgroundSize:
    data.currentVariant === 'ScreenTablet'
      ? `cover`
      : data.currentVariant === 'ScreenMobile'
      ? `cover`
      : 'unset',
  backgroundRepeat:
    data.currentVariant === 'ScreenTablet'
      ? `no-repeat`
      : data.currentVariant === 'ScreenMobile'
      ? `no-repeat`
      : 'unset',
}));

const Text: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems:
    data.currentVariant === 'ScreenTablet'
      ? `flex-start`
      : data.currentVariant === 'ScreenMobile'
      ? `flex-start`
      : `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
}));

const Frame1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'ScreenMobile' ? `column` : `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
}));

const Q404: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Antonio`,
  fontWeight: `700`,
  fontSize: `116px`,
  letterSpacing: `-3.48px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `0px`,
});

const Frame11: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: data.currentVariant === 'ScreenMobile' ? `center` : `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'ScreenMobile'
      ? `10px 0px 0px 0px`
      : `0px 0px 0px 20px`,
}));

const PageNotFound: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Antonio`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `-0.48px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const LooksLikeYouMightBeL: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `400`,
  fontSize: data.currentVariant === 'ScreenMobile' ? `18px` : `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `10px 0px 0px 0px`,
}));

const Btns: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'ScreenMobile' ? `column` : `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'ScreenTablet'
      ? `20px 0px 0px 0px`
      : `30px 0px 0px 0px`,
}));

const ButtonText: any = styled(Button)({
  margin: `0px`,
});

function Q4042(props: Q4042Props): JSX.Element {
  const { data } = useQ4042();

  return (
    <ScreenDesktop data={data}>
      <Hero data={data}>
        <FillHero data={data}>
          <Text data={data}>
            <Frame1 data={data}>
              <Q404>{`404`}</Q404>
              <Frame11 data={data}>
                <PageNotFound>{`Page not found`}</PageNotFound>
                <LooksLikeYouMightBeL data={data}>
                  {`Looks like you might be lost...`}
                </LooksLikeYouMightBeL>
              </Frame11>
            </Frame1>
          </Text>
          <Btns data={data}>
            <ButtonText
              variant="text"
              size="large"
              color="primary"
              endIcon={
                <SvgIcon
                  sx={{ width: '18px', height: '22px' }}
                  component={ArrowForwardFilled1}
                />
              }
            >
              {' '}
              GO BACK HOME{' '}
            </ButtonText>
          </Btns>
        </FillHero>
      </Hero>
    </ScreenDesktop>
  );
}

export default Q4042;
