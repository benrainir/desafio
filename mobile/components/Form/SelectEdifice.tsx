import { CheckIcon, FormControl, Select, Text, WarningOutlineIcon } from "native-base";

interface SelectEdificeProps {
	edifices: EdificeData[];
	edificeSelected: number;
	onSetEdificeSelected: (id: number) => void;
}

interface EdificeData {
	id: number;
	name: string;
}

export function SelectEdifice({
	edifices,
	edificeSelected,
	onSetEdificeSelected
}: SelectEdificeProps) {
	if (edifices.length) {
		return (
			<FormControl w="3/4" maxW="300" isRequired isInvalid>
				<FormControl.Label>Prédios </FormControl.Label>
				<Select
					minWidth="200"
					accessibilityLabel="Escolha um prédio"
					placeholder="Escolha um prédio"
					_selectedItem={{
						bg: "teal.600",
						endIcon: <CheckIcon size={5} />
					}}
					mt="1"
					onValueChange={itemSelected => onSetEdificeSelected(Number(itemSelected))}
				>
					{edifices.map(edifice => {
						return <Select.Item key={edifice.id} label={edifice.name} value={edifice.id.toString()} />
					})}
				</Select>

				{edificeSelected === 0 ? (
					<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
						Por favor selecione uma opção!
					</FormControl.ErrorMessage>
				) : ""}
			</FormControl>
		);
	}

	return <Text>Não existe prédios para essa rua.</Text>;
}