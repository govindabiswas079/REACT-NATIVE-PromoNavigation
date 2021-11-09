import React, { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const optionsPerPage = [2, 3, 4];

const Tables = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
  const [getdata, setGetdata] = useState([]);
  const [data, setData] = useState([]);
  console.log("data", data)

  var getconfig = {
    method: 'get',
    url: 'https://reqres.in/api/users?page=1',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const getValueFunction = () => {
    AsyncStorage.getItem('response').then(
      (value) =>
      setData(value),
    );
  };

  useEffect(() => {
    getValueFunction();
  }, [])


  const dataget = async () => {
    await axios(getconfig)
      .then(function (response) {
        var response_data = response
        var new_data = response_data.data.data
        setGetdata(new_data.reverse())
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    setPage(0);
    dataget();
  }, [itemsPerPage], []);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>#</DataTable.Title>
        <DataTable.Title>Email</DataTable.Title>
        <DataTable.Title>Full_Name</DataTable.Title>
        <DataTable.Title>Avatar</DataTable.Title>
      </DataTable.Header>
      {getdata.map((datas, index, key) => (
        <>
          <DataTable.Row key={key}>
            <DataTable.Cell key={key}>{datas.id}</DataTable.Cell>
            <DataTable.Cell>{datas.email}</DataTable.Cell>
            <DataTable.Cell>{datas.first_name} { } {datas.last_name}</DataTable.Cell>
            <DataTable.Cell>{datas.avatar}</DataTable.Cell>
          </DataTable.Row>
        </>
      ))}
      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  );
}

export default Tables;