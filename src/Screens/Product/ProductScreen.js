import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export class ProductScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Vendor', 'Name', 'Price', ''],
            tableData: []
        }
    }
    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        const response = await fetch('http://192.168.137.220:8080/Products/List', {
            method: 'GET',
        });
        const json = await response.json();
        let products = [];
        for (let product of json.data) {
            products.push([product.vendor.name, product.name, product.price, ""]);
        }
        this.setState({ tableData: products });
    }

    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
        this.getProducts();
        this.forceUpdate();
    }


    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(index)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Edit</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>
                <Table borderStyle={{ borderColor: 'transparent' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#ece8d3' },
    btn: { width: 58, height: 18, backgroundColor: '#2e303e', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});