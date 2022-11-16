import { useState, useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, Center, FormControl, Select, CheckIcon, WarningOutlineIcon, HStack, Spinner, Heading, Input, Button, VStack } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

import { api } from './services/api';
import { Loading } from './components/Loading';
import { SelectCity } from './components/Form/SelectCity';
import { SelectDistrict } from './components/Form/SelectDistrict';
import { SelectStreet } from './components/Form/SelectStreet';
import { SelectEdifice } from './components/Form/SelectEdifice';
import { WarningModal } from './components/WarningModal';
import { SuccessModal } from './components/SuccessModal';

interface CityData {
  id: number;
  name: string;
}

interface EdificeData {
  id: number;
  name: string;
  apartments: any[];
}

interface ApartmentData {
  id: number;
  name: string;
  level: number;
  edificeId: number;
}

interface BoxData {
  id: number;
  name: string;
}

interface ProductData {
  id: number;
  name: string;
}

export default function App() {
  const [showErrorApartmentNotFound, setShowErrorApartmentNotFound] = useState(false);
  const [showErrorBoxNotFound, setShowErrorBoxNotFound] = useState(false);
  const [showErrorProductNotFound, setShowErrorProductNotFound] = useState(false);
  const [showSuccessSave, setShowSuccessSave] = useState(false);
  const [showCleanApartment, setShowCleanApartment] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [cities, setCities] = useState<CityData[]>([]);
  const [citySelected, setCitySelected] = useState(0);

  const [districts, setDistricts] = useState([]);
  const [districtSelected, setDistrictSelected] = useState(0);

  const [streets, setStreets] = useState([]);
  const [streetSelected, setStreetSelected] = useState(0);

  const [edifices, setEdifices] = useState([]);

  const [apartmentSelected, setApartmentSelected] = useState('');
  const [apartment, setApartment] = useState<ApartmentData | undefined>(undefined);

  const [boxSelected, setBoxSelected] = useState('');
  const [box, setBox] = useState<BoxData | undefined>(undefined);

  const [productSelected, setProductSelected] = useState('');
  const [product, setProduct] = useState<ProductData | undefined>(undefined);

  const [productCountSelected, setProductCountSelected] = useState('');

  useEffect(() => {
    setIsLoading(true);


    setTimeout(() => {
      api.get('/cities/').then(response => {
        setCities(response.data);
        setIsLoading(false);
      });
    }, 300);

  }, []);

  async function onChangeCitySelected(id: number) {
    setCitySelected(id);
    setIsLoading(true);

    setTimeout(async () => {
      const response = await api.get(`/cities/${id}/districts/`);
      const districts = response.data;

      setDistricts(districts);
      setIsLoading(false);
    }, 300);
  }

  async function onChangeDistrictSelected(id: number) {
    setDistrictSelected(id);
    setIsLoading(true);

    setTimeout(async () => {
      const response = await api.get(`/districts/${id}/streets/`);

      const streets = response.data;

      setStreets(streets);
      setIsLoading(false);
    }, 300);
  }

  async function onChangeStreetSelected(id: number) {
    setStreetSelected(id);
    setIsLoading(true);

    setTimeout(async () => {
      const response = await api.get(`/streets/${id}/edifices/`);

      console.log(response);

      const edifices = response.data;

      setEdifices(edifices);

      setIsLoading(false);
    }, 1000);
  }

  async function handleOnPressSearchApartment() {
    console.log('Fui chamado!', apartmentSelected);

    setTimeout(async () => {
      const response = await api.get(`/apartments/${apartmentSelected}`);

      const apartment = response.data;

      if (apartment) {
        setApartment(apartment);
      } else {
        setShowErrorApartmentNotFound(true);
        setApartment(undefined);
        setBox(undefined);
        setProduct(undefined);
      }

    }, 1);
  }

  function handleOnPressSearchBox() {
    setTimeout(async () => {
      const response = await api.get(`/boxes/${boxSelected}`);

      const box = response.data;

      if (box) {
        setBox(box);
      } else {
        setShowErrorBoxNotFound(true);
        setBox(undefined);
        setProduct(undefined);
      }

    }, 1);
  }

  function handleOnPressSearchProduct() {
    setTimeout(async () => {
      const response = await api.get(`/products/${productSelected}`);

      const product = response.data;

      if (product) {
        setProduct(product);
      } else {
        setShowErrorProductNotFound(true);
        setProduct(undefined);
      }
    }, 1);
  }

  async function handleOnPressProductCount() {
    const data = {
      productId: Number(productSelected),
      boxId: Number(boxSelected),
      apartmentId: Number(apartmentSelected),
      quantity: Number(productCountSelected)
    };

    const response = await api.post(`/product/counts`, data);

    if (response.status === 201) {
      setShowSuccessSave(true);
    }

    console.log(response.data);
  }

  async function cleanApartmentAndProductCount() {
    var response = await api.put(`apartments/${apartmentSelected}/clean`);

    if (response.status === 200) {
      setShowCleanApartment(true);
    }
  }

  return (
    <NativeBaseProvider>
      <>

        <WarningModal
          show={showErrorApartmentNotFound}
          onShow={setShowErrorApartmentNotFound}
          title="Apartamento não encontrado"
          description="Verifique se digitou o código corretamente!"
        />

        <WarningModal
          show={showErrorBoxNotFound}
          onShow={setShowErrorBoxNotFound}
          title="Caixa não encontrada"
          description="Verifique se digitou o código corretamente!"
        />

        <WarningModal
          show={showErrorProductNotFound}
          onShow={setShowErrorProductNotFound}
          title="Produto não encontrado"
          description="Verifique se digitou o código corretamente!"
        />

        <SuccessModal
          show={showSuccessSave}
          onShow={setShowSuccessSave}
          title="Quantidade salva com sucesso"
          description=""
        />

        <SuccessModal
          show={showCleanApartment}
          onShow={setShowCleanApartment}
          title="Apartamento Limpo"
          description=""
        />

        <Loading isLoading={isLoading} />

        <Center>
          <SelectCity
            cities={cities}
            citySelected={citySelected}
            onSetCitySelected={onChangeCitySelected}
          />

          <SelectDistrict
            districts={districts}
            districtSelected={districtSelected}
            onSetDistrictSelected={onChangeDistrictSelected}
          />

          <SelectStreet
            streets={streets}
            streetSelected={streetSelected}
            onSetStreetSelected={onChangeStreetSelected}
          />

          {streetSelected !== 0 &&
            <Input size="lg" value={apartmentSelected} onChange={e => setApartmentSelected(e.target.value)} placeholder="Digite o código do apto." InputRightElement={
              <Button onPress={handleOnPressSearchApartment}  >Pesquisar</Button>}
            />}

          {apartment && (
            <>
              <VStack space={2} alignItems="center">
                <Text>Edifício: {apartment.edificeId}</Text>
                <Text>Apartamento: {apartment.name}</Text>
                <Text>Andar: {apartment.level}</Text>
              </VStack>

              <Input size="lg" value={boxSelected} onChange={e => setBoxSelected(e.target.value)} placeholder="Digite o código do objeto." InputRightElement={
                <Button onPress={handleOnPressSearchBox}>Pesquisar</Button>}
              />
            </>
          )}

          {box && (
            <>
              <Input size="lg" value={productSelected} onChange={e => setProductSelected(e.target.value)} placeholder="Digite o código do produto." InputRightElement={
                <Button onPress={handleOnPressSearchProduct}>Pesquisar</Button>}
              />
            </>
          )}

          {product && (
            <>
              <Input size="lg" keyboardType='numeric' value={productCountSelected} onChange={e => setProductCountSelected(e.target.value)} placeholder="Digite a quantidade do produto." InputRightElement={
                <Button onPress={handleOnPressProductCount}>Salvar</Button>}
              />
            </>
          )}

          {apartment && <Button onPress={cleanApartmentAndProductCount}>Apartamento vazio</Button>}
        </Center>
      </>
    </NativeBaseProvider>
  );
}