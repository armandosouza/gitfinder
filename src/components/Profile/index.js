import styled from "styled-components";

const Profile = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #121212;
    margin-right: 20px;
`

const ProfileName = styled.h5`
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 10px;

    &:after {
        content: ' - ';
        margin-left: 5px;
    }
`

const ProfileDescription = styled.p`
    font-size: 1rem;
`

const ProfileRepo = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`

const ProfileRepoName = styled.h6`
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px;

    &:after {
        content: ' - ';
        margin-left: 5px;
    }
`

const ProfileRepoDescription = styled.p`
    font-size: 16px;
    margin: 0 5px;
`

const ProfileRepoStars = styled.span`
    font-size: 16px;
    text-align: center;
    margin: 0 5px;
`

export { 
    Profile, 
    ProfileImage, 
    ProfileName, 
    ProfileDescription, 
    ProfileRepo,
    ProfileRepoName,
    ProfileRepoDescription,
    ProfileRepoStars
}