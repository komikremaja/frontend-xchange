import React, { useEffect, useState } from 'react'
import { FormAddRekeningContainer, FormAddRekeningInputContainer, FormProfileInputContainer, TitleFormProfile } from '../../Styles/FormProfile/FormProfileStyledComponent'
import FormAddRekening from './FormAddRekening';
import FormAddNpwp from './FormAddNpwp';
import FromEditProfile from './FromEditProfile';

export default function FormInputProfile(props) {
  const { currentAction, email } = props;

  const [title, setTitle] = useState();
  console.log(currentAction);

  useEffect(() => {

    if (currentAction === "Add") {
      setTitle("Daftar Rekening");
    } else if(currentAction === "Edit"){
      setTitle("Edit Profile");
    } else{
      setTitle("Daftar NPWP");
    }
  }, [currentAction]);


  return (
    <FormAddRekeningContainer>
      <TitleFormProfile>
        {title}
      </TitleFormProfile>
      <FormProfileInputContainer>
        <FormProfileInputContainer>
          <FormAddRekening currentAction={currentAction} email={email}/>
          <FormAddNpwp currentAction={currentAction} email={email}/>
          <FromEditProfile currentAction={currentAction} emailProps={email}/>
        </FormProfileInputContainer>
      </FormProfileInputContainer>
    </FormAddRekeningContainer>
  )
}
