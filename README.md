# SVG-Charts
While creating the Svg-Charts application the first issue that i faced was in using the react-native-svg-charts library.
I learnt that to use the react-native-svg-charts library we first need to make sure that react-native-svg is installed and linked to the project successfully.
Once the react-native-svg library is installed we will then download the react-native-svg-charts library and then we can continue to work with charts. Incase the problem still persist, it can be resolved by running the command "npm install" in the terminal and restarting the application. 
The next new thing that i learnt in building this appliaction is about Navigating among different pages in an application. In this project I have used Stack Navigation. I have used version 5 of React-Native-Navigation.
While using React-native-navigations it is really important to make sure that the version is latest and so are  the commands. Earlier versions of react-native-navigation uses different commands and API.
In this application I created different files for each graph component and added them as a seperate stack to the home Page that displays a list of all the available charts and the user can access to any chart by clicking on it in the list.
Each chart has different value of props accepted by it deepending upon the type of the chart and its requirements. We can add other features to our charts like grid, colors etc. We can also Integrate X-Axis and Y-Axis Component to other charts such as: Line Chart, Bar, Chart, Area Chart, according to our requirements.
