import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export class LineItemScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['PurchaseRequest', 'Product Name', 'Quantity', ''],
            tableData: []
        }
    }
    componentDidMount() {
        this.getLineItems();
    }

    getLineItems = async () => {
        const response = await fetch('http://192.168.137.220:8080/PurchaseRequestLineItems/List', {
            method: 'GET',
        });
        const json = await response.json();
        let lineItems = [];
        for (let lineItem of json.data) {
            lineItems.push([""+lineItem.purchaseRequest.user.userName+": "+lineItem.purchaseRequest.description, lineItem.product.name, lineItem.quantity, ""]);
        }
        this.setState({ tableData: lineItems });
    }

    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
        this.getLineItems();
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