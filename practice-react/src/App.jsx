import UseCallbackPrac from './hooks-practice/UseCallbackPrac.jsx'
import UseLayoutEffectPrac from './hooks-practice/UseLayoutEffectPrac.jsx'
import UseMemoPrac from './hooks-practice/UseMemoPrac.jsx'
import UseRefPrac from './hooks-practice/useRefPrac.jsx'
import Debouncing from './react-coding-practice/Debouncing.jsx'
import Forms from './react-coding-practice/Forms.jsx'
import TicTacToe from './react-coding-practice/TicTacToe.jsx'
import ThemeMain from './components/ThemeMain.jsx'
import UseReducerMain from './hooks-practice/useReducerMain.jsx'
import UseCallbackMain from './hooks-practice/UseCallbackMain.jsx'
import UseMemoMain from './hooks-practice/UseMemoMain.jsx'
import FormikAndYup from './components/FormikAndYup.jsx'
import CountandName from './useEffect-Challenges/CountandName.jsx'
import CountdownTimer from './react-coding-practice/CountdownTimer.jsx'
import FAQ from './react-coding-practice/FAQ.jsx'
import MortgageConverter from './react-coding-practice/MortgageConverter.jsx'
import UndoableCounter from './react-coding-practice/UndoableCounter.jsx'
import ShoppingItem from './react-coding-practice/ShoppingItem.jsx'
import ShoppingCart from './react-coding-practice/ShoppingCart.jsx'
import ModalOverlay from './react-coding-practice/ModalOverlay.jsx'
import CodeVerification from './react-coding-practice/CodeVerification.jsx'
import AnnoyingSignupForm from './react-coding-practice/AnnoyingSignupForm.jsx'
import Searching from './react-coding-practice/Searching.jsx'
import SearchingPractice from './react-coding-practice/SearchingPractice.jsx'
import UnDoablePractice from './react-coding-practice/UnDoablePractice.jsx'
import JobBoard from './react-coding-practice/JobBoard.jsx'
import Pagination from './react-coding-practice/Pagination.jsx'
import { Component, useEffect, useState } from 'react'
import MultipleAccordian from './react-coding-practice/MultipleAccordian.jsx'
import RandomColorPractice from './react-coding-practice/RandomColorPractice.jsx'
import ImageSlider from './react-coding-practice/ImageSlider.jsx'
import LoadMore from './react-coding-practice/LoadMore.jsx'
import TreeView from './react-coding-practice/TreeView.jsx'
import QRgenerator from './react-coding-practice/QRgenerator.jsx'
import DarkMode from './react-coding-practice/darkMode.jsx'
import Tab from './react-coding-practice/Tab.jsx'
import ShowModal from './react-coding-practice/ShowModal.jsx'
import AutoSearch from './react-coding-practice/AutoSearch.jsx'
import useFeatureFlag, { FeatureFlagProvider } from './hooks-practice/featureFlag.js'
import MultipleFunctionality from './react-coding-practice/MultipleFunctionality.jsx'
import WeatherApp from './react-coding-practice/WeatherApp.jsx'
import AccordianMultipleSelection from './react-coding-practice/AccordianMultipleSelection.jsx'
import Interview from './react-coding-practice/Interview.jsx'
import Css1 from './css-tutorial/css-1/css1.jsx'
import Flexbox from './css-tutorial/flexbox/flexbox.jsx'
import Grid from './css-tutorial/grid/Grid.jsx'
import DebouncingApi from './advance-topics/DebouncingApi.jsx'
import Todos from './react-coding-practice/Todos.jsx'
import ImageSlider2 from './react-coding-practice/ImageSlider2.jsx'
import Pagination2 from './react-coding-practice/Pagination2.jsx'
import Refs from './react-coding-practice/Refs.jsx'
import Main from './interview-questions/EmployeeDatabaseManagement/Main.jsx'
import MainTimer from './interview-questions/CountDownTimer/Main.jsx'

function App() {
  // const data = [
  //   {
  //     id : 1,
  //     title : "Title 1",
  //     description : "Description 1"
  //   },
  //   {
  //     id : 2,
  //     title : "Title 2",
  //     description : "Description 2"
  //   },
  //   {
  //     id : 3,
  //     title : "Title 3",2

  //     description : "Description 3"
  //   },
  // ]

  // const [pageNumber, setPageNumber] = useState(1)

  // useEffect(() =>{
  //   fetchData()
  // },[pageNumber])
  
  // async function fetchData(){
  //   try {
  //     const data = await fetch(`https://omdbapi.com/?apikey=22131b93&s=avengers&page=${pageNumber}`)
  //     const res = await data.json()
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const handlePage = (digit)=>{
  //   if(pageNumber < 1){
  //     return
  //   }
  //   setPageNumber(prev => prev + digit)
  // }

  // const data = [
  //   {
  //     label: "Home",
  //     to: "/",
  //   },
  //   {
  //     label: "Profile",
  //     to: "/profile",
  //     children: [
  //       {
  //         label: "Details",
  //         to: "details",
  //         children: [
  //           {
  //             label: "Location",
  //             to: "location",
  //             children: [
  //               {
  //                 label: "City",
  //                 to: "city",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     label: "Settings",
  //     to: "/settings",
  //     children: [
  //       {
  //         label: "Account",
  //         to: "account",
  //       },
  //       {
  //         label: "Security",
  //         to: "security",
  //         children: [
  //           {
  //             label: "Login",
  //             to: "login",
  //           },
  //           {
  //             label: "Register",
  //             to: "register",
  //             children : [
  //                 {
  //                     label : 'Random data',
  //                     to : ''
  //                 }
  //             ]
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  // const {imageSlider,pagination,qrGenerator,undoableCounter,codeVerification,mortgageConveter} = useFeatureFlag();
  // const {data} = useFeatureFlag();
  // console.log(data);

  // const enabledFeatures = [
  //   {
  //     key : imageSlider,
  //     component : <ImageSlider/>
  //   },
  //   {
  //     key : pagination,
  //     component : <Pagination/>
  //   },
  //   {
  //     key : qrGenerator,
  //     component : <QRgenerator/>
  //   },
  //   {
  //     key : undoableCounter,
  //     component : <UnDoablePractice/>
  //   },
  //   {
  //     key : codeVerification,
  //     component : <CodeVerification/>
  //   },
  //   {
  //     key : mortgageConveter,
  //     component : <MortgageConverter/>
  //   },
  // ]



  return (
    <>
      {/* <UseRefPrac/> */}
      {/* <UseMemoPrac /> */}
      {/* <UseCallbackPrac /> */}
      {/* <UseLayoutEffectPrac /> */}
      {/* <TicTacToe/> */}
      {/* <ThemeMain/> */}
      {/* <UseReducerMain/> */}
      {/* <UseCallbackMain/> */}
      {/* <UseMemoMain/> */}
      {/* <FormikAndYup/> */}
      {/* <CountandName/> */}
      {/* <CountdownTimer/> */}
      {/* {
        data.map((item)=> (
          <div key={item.id}>
            <FAQ title={item.title} id={item.id} description={item.description}/>
          </div>
        ))
      } */}
      {/* <MortgageConverter/> */}
      {/* <UndoableCounter/> */}
      {/* <ShoppingItem/> */}
      {/* <ShoppingCart/> */}
      {/* <ModalOverlay/> */}
      {/* <CodeVerification/> */}
      {/* <AnnoyingSignupForm/> */}
      {/* <Searching/> */}
      {/* <SearchingPractice/> */}
      {/* <UnDoablePractice/> */}
      {/* <JobBoard/> */}
      {/* <Pagination pageNumber={pageNumber} handlePage={(digit)=> handlePage(digit)}/> */}
      {/* <MultipleAccordian/> */}
      {/* <RandomColorPractice/> */}
      {/* <ImageSlider/> */}
      {/* <LoadMore/> */}
      {/* <TreeView data={data}/> */}
      {/* <QRgenerator/> */}
      {/* <DarkMode/> */}
      {/* <Tab/> */}
      {/* <ShowModal/> */}
      {/* <AutoSearch/> */}
      {/* {
        enabledFeatures.map((component) => component.key ? component.component : null)
      } */}
      {/* <MultipleFunctionality/> */}
      {/* <WeatherApp/> */}
      {/* <AccordianMultipleSelection/> */}
      {/* <Css1/> */}
      {/* <Flexbox/> */}
      {/* <Grid/> */}
      {/* <DebouncingApi/> */}
      {/* <Debouncing/> */}
      {/* <Todos/> */}
      {/* <Todos/> */}
      {/* <Searching/> */}
      {/* <ImageSlider2/> */}
      {/* <Pagination2/> */}
      {/* <Refs/> */}
      {/* <Main/> */}
      <MainTimer/>
    </>
  )
}

export default App