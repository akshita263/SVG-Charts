import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Circle, Path } from 'react-native-svg'

class Proportional
 extends React.PureComponent {

    render() {

        const data = [ 8, 1, 2, 5, 3 ]
        data.sort(function(a, b){return a-b});
        
        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 10 * (value) }
                    stroke={ 'black' }
                    fill={ 'grey' }
                />
            ))
        }

        const Line = ({ line }) => (
            <Path
                d={ line }
                stroke={ 'rgba(134, 65, 244, 0)' }
                fill={ 'none' }
            />
        )

        return (
            <AreaChart
                style={{ height: 200 }}
                data={ data }
                svg={{ fill: 'rgba(134, 65, 244, 0)' }}
                contentInset={{ top: 20, bottom: 30 }}
            >
                <Grid/>
                <Line/>
                <Decorator/>
            </AreaChart>
        )
    }

}

export default Proportional
