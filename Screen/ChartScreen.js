import React from 'react';
import {SafeAreaView, View, Text, Dimensions, StatusBar} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

const labels = [
  'Label 1',
  'Label 2',
  'Label 3',
  'Label 4',
  'Label 5',
  'Label 6',
];

const data = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];

const ChartScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25}}>Line Chart Sample</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <LineChart
              data={{
                labels: labels,
                datasets: [
                  {
                    data: data,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 50} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#D9D9D9',
                backgroundGradientTo: '#FFF',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 5,
                borderRadius: 15,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ChartScreen;

