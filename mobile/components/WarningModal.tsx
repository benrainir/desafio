import { Alert, Box, CloseIcon, Collapse, HStack, IconButton, Text, VStack } from "native-base";
import { useState } from "react";


interface WarningModalProps {
  show: boolean;
  onShow: (show: boolean) => void;
  title: string;
  description: string;
}

export function WarningModal({
  show,
  onShow,
  title,
  description
}: WarningModalProps) {
  return (
    <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert maxW="400" status="warning">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                  color: "coolGray.800"
                }}>
                  {title}
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
                borderWidth: 0
              }} icon={<CloseIcon size="3" />} _icon={{
                color: "coolGray.600"
              }} onPress={() => onShow(false)} />
            </HStack>
            <Box pl="6" _dark={{
              _text: {
                color: "coolGray.600"
              }
            }}>
              {description}
            </Box>
          </VStack>
        </Alert>
      </Collapse>
    </Box>
  );
}