import React from 'react';
import { Heading, Text, Link} from 'rebass/styled-components'
import styled from 'styled-components';

const SourceLink = props =>
  <Link
    {...props}
    sx={{
      color: 'blue',
      textDecoration:'none',
      fontSize: ['10px', '12px']
      // textDecoration:'underline wavy'
    }}
  />

const NameHeading = props =>
  <Heading
    {...props}
    sx={{
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize:['20px', '22px'],
      letterSpacing:'0.5px',
      color: 'white'
    }}
  />

const AttributionDescription = props =>
  <Text
    {...props}
    sx={{
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      color: 'lime',
      marginTop: '3px',
      fontSize:['14px', '16px']
    }}
  />

const MetaData = (props) => {
  const {metadata, resource} = props.data
  const {header, description} = metadata
  if (description == "Museum of Comparative Zoology (MCZ)"){
      return(
        <>
          <NameHeading>
              <em>{header}</em>
          </NameHeading>
        <AttributionDescription>{description}</AttributionDescription>
        </>
      )}
  else {
      return(
        <>
          <NameHeading>
            <em>{header}</em>
          </NameHeading>
        <AttributionDescription>{description}</AttributionDescription>

        </>
      )
    }
}

export default MetaData
