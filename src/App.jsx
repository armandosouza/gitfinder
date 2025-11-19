import { useState } from "react";

import Container from "./components/Container";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Button from "./components/Button";

import { SearchBox, SearchContainer, SearchInput } from "./components/SearchBox";
import 
  { 
    Profile, 
    ProfileImage, 
    ProfileName, 
    ProfileDescription, 
    ProfileRepo,
    ProfileRepoName,
    ProfileRepoDescription,
    ProfileRepoStars
  } from "./components/Profile";

import { FaSearch, FaCodeBranch } from 'react-icons/fa'

import logo from './assets/github.png'

import './global.css';

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSearch = async () => {
    if (!username) return;

    try {
      const responseProfileData = await fetch(`https://api.github.com/users/${username}`)
      const profileData = await responseProfileData.json();
      
      setUserData({
        avatar_url: profileData.avatar_url, 
        name: profileData.name, 
        bio: profileData.bio
      });

      // repo with most stars
      const responseTopRepoData = await fetch(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc&per_page=1`)
      const topRepoData = await responseTopRepoData.json();
      
      if (topRepoData.items && topRepoData.items.length > 0) {
        const topRepo = topRepoData.items[0];
        setRepoData({
          name: topRepo.name,
          description: topRepo.description,
          stars: topRepo.stargazers_count,
        });
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <Container>
      <Header>
        <h1>Git Finder</h1>
      </Header>
      <MainContent>
        <img src={logo} alt="Logo do GitHub" width={200}/>
        <SearchBox>
          <SearchContainer>
            <FaSearch />
            <SearchInput onChange={(e) => handleUsernameChange(e)} placeholder="Digite o nome de usuário do GitHub"/>
          </SearchContainer>
          <Button onClick={handleSearch}>Buscar</Button>
        </SearchBox>
        {userData &&
          <Profile>
            <ProfileImage src={userData?.avatar_url} alt={`Avatar de ${userData?.name}`}/>
            <ProfileName>{userData?.name}</ProfileName>
            <ProfileDescription>{userData?.bio}</ProfileDescription>
          </Profile>
        }
        {repoData &&
          <>
            <ProfileRepo>
              <ProfileRepoName>
                <FaCodeBranch/> {repoData?.name}
              </ProfileRepoName>
              <ProfileRepoDescription>{repoData?.description}</ProfileRepoDescription>
              <ProfileRepoStars>⭐ {repoData?.stars}</ProfileRepoStars>
            </ProfileRepo>
          </>
        }
      </MainContent>
    </Container>
  );
}

export default App;