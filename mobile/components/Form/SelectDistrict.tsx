import { CheckIcon, FormControl, Select, Text, WarningOutlineIcon } from "native-base";

interface SelectDistrictProps {
  districts: DistrictData[];
  onSetDistrictSelected: (id: number) => void;
  districtSelected: number;
}

interface DistrictData {
  id: number;
  name: string;
}

export function SelectDistrict({
  districts,
  districtSelected,
  onSetDistrictSelected
}: SelectDistrictProps) {
  if (districts.length) {
    return (
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Bairros </FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Escolha um bairro"
          placeholder="Escolha um bairro"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }}
          mt="1"
          onValueChange={itemSelected => onSetDistrictSelected(Number(itemSelected))}
        >
          {districts.map(district => {
            return <Select.Item key={district.id} label={district.name} value={district.id.toString()} />
          })}
        </Select>

        {districtSelected === 0 ? (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Por favor selecione uma opção!
          </FormControl.ErrorMessage>
        ) : ""}
      </FormControl>
    );
  }

  return <Text>Não existe bairros para essa cidade.</Text>;
}