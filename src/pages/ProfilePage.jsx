import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import PersonalInformation from '../components/PersonalInformation'
import AddressPage from '../components/AddressPage'

const ProfilePage = () => {
  return (
    <MainContainer>
       <Sidebar />
       <PersonalInformation />
       {/* <AddressPage/>  */}
    </MainContainer>
  )
}

export default ProfilePage

const MainContainer = styled.div`
width: 100%;
display: flex;


`