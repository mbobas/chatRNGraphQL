import React from 'react';
import {View} from "react-native";
import {useQuery} from "@apollo/client";
import {getClient, GET_ROOMS} from '../queries/getRooms';

const RoomsList = () => {
    const {data, loading } = useQuery(getClient);

    if (loading) return  console.log(loading)
}

export default RoomsList;