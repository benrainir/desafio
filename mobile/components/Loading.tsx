import { Heading, HStack, Spinner } from "native-base";

interface LoadingProps {
  isLoading: boolean;
}

export function Loading({ isLoading = false }: LoadingProps) {
  if (isLoading) {
    return (
      <HStack space={2} justifyContent="center" alignItems="center" height="100vh" backgroundColor="">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">Carregando...</Heading>
      </HStack>
    );
  }

  return (
    <></>
  );
}