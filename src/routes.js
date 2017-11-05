import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import CoursesPage from './components/course/CoursesPage'

export default (
  <App>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/courses' component={CoursesPage} />
  </App>
)
