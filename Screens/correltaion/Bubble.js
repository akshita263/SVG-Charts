import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Circle, Path } from 'react-native-svg'

class DecoratorExample extends React.PureComponent {

    render() {

        const data = [ 5, 3, 2, 2, 4, 6, 4]

        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 10 * (value) }
                    stroke={ 'black' }
                    fill={ 'rgba(0, 0, 0, 0.3)' }
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
                style={{ height: 200 , width: 200}}
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

export default DecoratorExample