import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import api from '../../services/api';

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});


export default class Main extends Component {
  state = {
    answear: {},
    /* answearError: false,
    loading: false, */
  }

  async componentDidMount () {
    this.setState({ loading: true, answear: await this.getAnswear()})
  }

  getAnswear = async () => {
    try {
      const { data } = await api.get()

      return {
        label: data.answer.toUpperCase(),
        image: data.image
      };
    } catch (err) {
      this.setState({ answearError: true })
    } finally {
      this.setState({ loading: false })
    }
  }

  render () {
    const { answear } = this.state    
    console.log(answear)
    
    return (
      <Image
        style={styles.fullScreen}
        source={{ uri: answear.image}}
      />
    )
  }
}
