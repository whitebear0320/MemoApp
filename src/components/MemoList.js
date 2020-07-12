import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native'

class MemoList extends React.Component {
  renderMemo({item}) {
    const date = new Date(item.createdOn.seconds * 1000)
    return (
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body}</Text>
          <Text style={styles.memoDate}>{date.getFullYear()}/{('0' + (date.getMonth()+1)).slice(-2)}/{('0' + date.getDate()).slice(-2)}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    console.log(this.props.memoList)
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff'
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2'
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#e31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontSize: 32,
    color: '#fff'
  }


});

export default MemoList