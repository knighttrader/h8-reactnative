import React, {Component} from 'react';
import Img from '../../atoms/Img';
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup'
import Title from '../../atoms/Title';
import './style.css';

export default class Members extends Component {

  renderMembers() {
    return this.props.members.map((eachMember, index) => {
      return (
        <div key={index} className="Members-Body">
          <Img
            width= '120px'
            height= '120px'
            src={eachMember.picture.large}
            alt={'icon'}
            className= 'ProfilePic'
          />
          <TextGroup className='Members-Detail'>
            <Text content = {eachMember.email} className='Members-Type'/>
            <TextGroup className = 'Members-Summary'>
              <Text content = {`${eachMember.name.first} ${eachMember.name.last}`} className='Members-Name'/>
              <Text content = {eachMember.dob.age} className='Members-Total'/>
              <Text content = {eachMember.dob.age < 2 ? 'year old.' : 'years old.'}/>
            </TextGroup>
          </TextGroup>
        </div>
      )
    })
  };
  
  render() {
    return(
      <div>
        <div className="Members">

          <Title text='Members' className='Subtitle'/>
          <Link text='See All' className='SeeAll'/>

          { this.renderMembers() }
        </div>
      </div>
    )
  }
}