import { CheckIcon, FormControl, Select, Text, WarningOutlineIcon } from "native-base";

interface SelectStreetProps {
  streets: StreetData[];
  streetSelected: number;
  onSetStreetSelected: (id: number) => void;
}

interface StreetData {
  id: number;
  name: string;
}

export function SelectStreet({
  streets,
  streetSelected,
  onSetStreetSelected
}: SelectStreetProps) {
  if (streets.length) {
    return (
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Ruas </FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Escolha uma rua"
          placeholder="Escolha uma rua"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }}
          mt="1"
          onValueChange={itemSelected => onSetStreetSelected(Number(itemSelected))}
        >
          {streets.map(street => {
            return <Select.Item key={street.id} label={street.name} value={street.id.toString()} />
          })}
        </Select>

        {streetSelected === 0 ? (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Por favor selecione uma opção!
          </FormControl.ErrorMessage>
        ) : ""}
      </FormControl>
    );
  }

  return <Text>Não existe ruas para esse bairro.</Text>;
}