import { Box, Collapse, HStack, VStack, Alert, IconButton, CloseIcon, Text } from "native-base";

interface SuccessModalProps {
  show: boolean;
  onShow: (show: boolean) => void;
  title: string;
  description: string;
}

export function SuccessModal({
  show,
  onShow,
  title,
  description
}: SuccessModalProps) {
  return (
    <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert maxW="400" status="success">
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