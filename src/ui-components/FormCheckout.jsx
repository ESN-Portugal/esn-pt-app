/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  IconDelete,
  IconShoppingBag,
  Image,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="0"
        direction="row"
        width="667px"
        alignItems="flex-start"
        grow="1"
        basis="667px"
        height="1148px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="667px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          basis="667px"
          height="1084px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Info"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <TextField
              display="flex"
              shrink="0"
              alignSelf="stretch"
              label="Label"
              size="large"
              variation="default"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].TextField[0]"
              )}
            ></TextField>
            <TextField
              display="flex"
              shrink="0"
              alignSelf="stretch"
              label="Label"
              size="large"
              variation="default"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].TextField[1]"
              )}
            ></TextField>
          </Flex>
          <Divider
            width="667px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[0]")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Shipping"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Text[0]"
              )}
            ></Text>
            <TextField
              display="flex"
              shrink="0"
              alignSelf="stretch"
              label="Label"
              size="large"
              variation="default"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].TextField[0]"
              )}
            ></TextField>
            <TextField
              display="flex"
              shrink="0"
              alignSelf="stretch"
              label="Label"
              size="large"
              variation="default"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].TextField[1]"
              )}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Flex[0]"
              )}
            >
              <TextField
                width="289.5px"
                display="flex"
                grow="1"
                basis="289.5px"
                height="74px"
                label="Label"
                size="large"
                variation="default"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].TextField[0]"
                )}
              ></TextField>
              <SelectField
                width="289.5px"
                display="flex"
                grow="1"
                basis="289.5px"
                height="74px"
                label="Label"
                size="large"
                variation="default"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].SelectField[0]"
                )}
              ></SelectField>
            </Flex>
            <Flex
              gap="24px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Flex[1]"
              )}
            >
              <TextField
                width="289.5px"
                display="flex"
                grow="1"
                basis="289.5px"
                height="74px"
                label="Label"
                size="large"
                variation="default"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[1].TextField[0]"
                )}
              ></TextField>
              <SelectField
                width="289.5px"
                display="flex"
                grow="1"
                basis="289.5px"
                height="74px"
                label="Label"
                size="large"
                variation="default"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[1].SelectField[0]"
                )}
              ></SelectField>
            </Flex>
          </Flex>
          <Divider
            width="667px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[1]")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Card info"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[2].Text[0]"
              )}
            ></Text>
            <TextField
              display="flex"
              shrink="0"
              alignSelf="stretch"
              label="Label"
              size="large"
              variation="default"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[2].TextField[0]"
              )}
            ></TextField>
            <TextField
              display="flex"
              shrink="0"
              alignSelf="stretch"
              label="Label"
              size="large"
              variation="default"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[2].TextField[1]"
              )}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[2].Flex[0]"
              )}
            >
              <SelectField
                width="289.5px"
                display="flex"
                grow="1"
                basis="289.5px"
                height="74px"
                label="Label"
                size="large"
                variation="default"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[2].Flex[0].SelectField[0]"
                )}
              ></SelectField>
              <SelectField
                width="289.5px"
                display="flex"
                grow="1"
                basis="289.5px"
                height="74px"
                label="Label"
                size="large"
                variation="default"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[2].Flex[0].SelectField[1]"
                )}
              ></SelectField>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        height="934px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="469px"
          height="870px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="134px"
            position="absolute"
            left="32px"
            top="194px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0]")}
          >
            <Image
              width="89px"
              height="130px"
              position="absolute"
              left="0px"
              top="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[0].Image[0]"
              )}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.49px"
              position="absolute"
              left="121px"
              top="112px"
              padding="0px 0px 0px 0px"
              children="Order Summary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[0].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="121px"
              top="32px"
              padding="0px 0px 0px 0px"
              children="Black"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[0].Text[1]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="121px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="Basic Tee"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[0].Text[2]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="121px"
              top="64px"
              padding="0px 0px 0px 0px"
              children="Large"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[0].Text[3]"
              )}
            ></Text>
            <IconDelete
              width="24px"
              height="24px"
              overflow="hidden"
              position="absolute"
              left="381px"
              top="0px"
              padding="0px 0px 0px 0px"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              type="delete"
              fontSize="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[0].IconDelete[-1]"
              )}
            ></IconDelete>
            <SelectField
              width="64px"
              position="absolute"
              display="flex"
              left="341px"
              top="104px"
              size="small"
              labelHidden="true"
              variation="default"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[0].SelectField[0]"
              )}
            ></SelectField>
          </View>
          <Divider
            width="469px"
            position="absolute"
            left="0px"
            top="362px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[0]")}
          ></Divider>
          <Divider
            width="469px"
            position="absolute"
            left="0px"
            top="161px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[1]")}
          ></Divider>
          <Divider
            width="469px"
            position="absolute"
            left="0px"
            top="72px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[2]")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="134px"
            position="absolute"
            left="32px"
            top="395px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1]")}
          >
            <Image
              width="89px"
              height="130px"
              position="absolute"
              left="0px"
              top="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[1].Image[0]"
              )}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.49px"
              position="absolute"
              left="121px"
              top="112px"
              padding="0px 0px 0px 0px"
              children="Order Summary"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[1].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="121px"
              top="32px"
              padding="0px 0px 0px 0px"
              children="Black"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[1].Text[1]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="121px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="Basic Tee"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[1].Text[2]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="121px"
              top="64px"
              padding="0px 0px 0px 0px"
              children="Large"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[1].Text[3]"
              )}
            ></Text>
            <IconDelete
              width="24px"
              height="24px"
              overflow="hidden"
              position="absolute"
              left="381px"
              top="0px"
              padding="0px 0px 0px 0px"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              type="delete"
              fontSize="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[1].IconDelete[-1]"
              )}
            ></IconDelete>
            <SelectField
              width="64px"
              position="absolute"
              display="flex"
              left="341px"
              top="104px"
              size="small"
              labelHidden="true"
              variation="default"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[1].SelectField[0]"
              )}
            ></SelectField>
          </View>
          <Divider
            width="469px"
            position="absolute"
            left="0px"
            top="563px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[3]")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            left="32px"
            top="596px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[2]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="77.75053405761719px"
              position="absolute"
              left="0px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="Subtotal"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[2].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="340px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="$320.00"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[2].Text[1]"
              )}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            left="32px"
            top="636px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[3]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="80.14285278320312px"
              position="absolute"
              left="0px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="Shipping"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[3].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="353px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="$15.00"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[3].Text[1]"
              )}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            left="32px"
            top="676px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[4]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="53.82728958129883px"
              position="absolute"
              left="0px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="Taxes"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[4].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              position="absolute"
              left="350px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="$26.80"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[4].Text[1]"
              )}
            ></Text>
          </View>
          <Divider
            width="405px"
            position="absolute"
            left="32px"
            top="716px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[4]")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="20px"
            position="absolute"
            left="32px"
            top="733px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[5]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.49px"
              width="50.23880386352539px"
              position="absolute"
              left="0px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="Total"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[5].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="20px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.49px"
              position="absolute"
              left="336px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="$361.80"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[5].Text[1]"
              )}
            ></Text>
          </View>
          <Divider
            width="469px"
            position="absolute"
            left="0px"
            top="789px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[5]")}
          ></Divider>
          <Button
            position="absolute"
            display="flex"
            width="405px"
            left="32px"
            top="822px"
            size="large"
            variation="primary"
            children="Place Order"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Button[0]")}
          ></Button>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            left="32px"
            top="105px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[6]")}
          >
            <IconShoppingBag
              width="24px"
              height="24px"
              overflow="hidden"
              position="absolute"
              left="0px"
              top="0px"
              padding="0px 0px 0px 0px"
              type="shopping_bag"
              fontSize="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[6].IconShoppingBag[-1]"
              )}
            ></IconShoppingBag>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              left="40px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="Cart (2)"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[6].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              left="343px"
              top="0px"
              padding="0px 0px 0px 0px"
              children="$101.70"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].View[6].Text[1]"
              )}
            ></Text>
          </View>
          <Badge
            color="rgba(54.00000058114529,94.0000019967556,61.00000016391277,1)"
            position="absolute"
            backgroundColor="rgba(214.00000244379044,245.00000059604645,219.0000021457672,1)"
            display="flex"
            width="405px"
            left="32px"
            top="0px"
            fontFamily="Inter"
            fontWeight="700"
            fontSize="16px"
            textAlign="left"
            lineHeight="20px"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.49px"
            size="default"
            variation="success"
            children="Discount - 10% off"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Badge[0]")}
          ></Badge>
        </Flex>
      </Flex>
    </Flex>
  );
}