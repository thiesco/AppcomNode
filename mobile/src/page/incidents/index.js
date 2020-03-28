import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';//TouchableOpacity permite criar algo que ao ser tocado fica opaco
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

import styles from  './styles';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);//Armazernar a informação quando vai buscar os dados

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }

    async function loadIncidents(){
        if(loading) {//para quando nao estiver mais o que carregada para não tentar
            return;
        }

        if (total >0 && incidents.length == total)
        {
            return;
        }

        setLoading(true); //inicio de requisição

        
        const response = await api.get(`incidents`,{
            params: {page}
        });//await api.get(`incidents?page=${page}`)
        // setIncidents(response.data); dessa foma quanto a pagina se actulizada ficaria com os cinco novos dados
        setIncidents([...incidents,...response.data]);//dessa forma anexa os novos dados ao antigos assim garantidon scroll infinito
        setTotal(response.headers['x-total-count'])

        setPage(page + 1);
        setLoading(false); // final da requisição
    }

    useEffect(() => {
        loadIncidents();
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    <Text style={styles.headerTextBold}>
                        Total de {total} casos
                    </Text>
                </Text>
            </View>

            <Text style={styles.title}> Bem Vindo </Text>
            <Text style={styles.description}> Escolha um dos casos abaixos </Text>

            <FlatList
                onEndReached = {loadIncidents} //quando chega no final da lista carrega novos se houve
                onEndReachedThreshold ={0.2}//quantos ainda restam pra mostrar andes de carregar a lista assim e 20%
                style={ styles.indentList }
                data={incidents}

                keyExtractor={ incident => String(incident.id) }
                showsVerticalScrollIndicator = {false}//Asim removo a imagem do scroll
                renderItem = {({ item: incident }) => (
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}> ONG: </Text>
                    <Text style={styles.incidentValue}> {incident.name}</Text>

                    <Text style={styles.incidentProperty}> CASO: </Text>
                    <Text style={styles.incidentValue}> {incident.title} </Text>

                    <Text style={styles.incidentProperty}> Valor: </Text>
                    <Text style={styles.incidentValue}> 
                        {Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'})
                        .format(incident.value)} 
                    </Text>
                  
                    <TouchableOpacity style={styles.detailsButton} 
                    onPress={() => navigateToDetail(incident)}>

                        <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color={"#E02041"} />
                    </TouchableOpacity>
                </View>    
                )}
            />
        </View>
    )
}