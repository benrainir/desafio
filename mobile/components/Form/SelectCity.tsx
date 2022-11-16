import { CheckIcon, FormControl, Select, WarningOutlineIcon } from "native-base";

interface SelectCityProps {
  cities: CityData[];
  onSetCitySelected: (id: number) => void;
  citySelected: number;
}

interface CityData {
  id: number;
  name: string;
}

export function SelectCity({
  cities,
  citySelected,
  onSetCitySelected
}: SelectCityProps) {
  return (
    <FormControl w="3/4" maxW="300" isRequired isInvalid>
      <FormControl.Label>Cidades </FormControl.Label>
      <Select
        minWidth="200"
        accessibilityLabel="Esolha uma cidade"
        placeholder="Esolha uma cidade"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />
        }}
        mt="1"
        onValueChange={itemSelected => onSetCitySelected(Number(itemSelected))}
      >
        {cities.map(city => {
          return <Select.Item key={city.id} label={city.name} value={city.id.toString()} />
        })}
      </Select>

      {citySelected === 0 ? (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Por favor selecione uma opção!
        </FormControl.ErrorMessage>
      ) : ""}
    </FormControl>
  );
}