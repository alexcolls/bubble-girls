import React from 'react';
import { InfoContainer, InfoWrapper, Title, InfoRow, Column1, Column2, Column3, TextWrapper, TitleWrapper, Number, Text, Date } from './CollectionElements';

function InfoSection2( { id, stage1, stage2, stage3, stage4, stage5, stage6 } ) {
    return (
        <InfoContainer id={id}>
            <InfoWrapper>
                <TitleWrapper>
                    <Title>ROADMAP</Title>
                </TitleWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Number>{stage1[0]}</Number>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Text>{stage1[1]}</Text> 
                        </TextWrapper>        
                    </Column2>
                    <Column3>
                        <TextWrapper>
                            <Date>{stage1[2]}</Date> 
                        </TextWrapper>        
                    </Column3>
                </InfoRow>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Number>{stage2[0]}</Number>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Text>{stage2[1]}</Text> 
                        </TextWrapper>        
                    </Column2>
                    <Column3>
                    <Column3>
                        <TextWrapper>
                            <Date>{stage2[2]}</Date> 
                        </TextWrapper>        
                    </Column3>     
                    </Column3>
                </InfoRow>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Number>{stage3[0]}</Number>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Text>{stage3[1]}</Text> 
                        </TextWrapper>        
                    </Column2>
                    <Column3>
                        <TextWrapper>
                            <Date>{stage3[2]}</Date> 
                        </TextWrapper>        
                    </Column3>
                </InfoRow>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Number>{stage4[0]}</Number>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Text>{stage4[1]}</Text> 
                        </TextWrapper>        
                    </Column2>
                    <Column3>
                        <TextWrapper>
                            <Date>{stage4[2]}</Date> 
                        </TextWrapper>        
                    </Column3>
                </InfoRow>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Number>{stage5[0]}</Number>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Text>{stage5[1]}</Text> 
                        </TextWrapper>        
                    </Column2>
                    <Column3>
                        <TextWrapper>
                            <Date>{stage5[2]}</Date> 
                        </TextWrapper>        
                    </Column3>
                </InfoRow>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Number>{stage6[0]}</Number>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Text>{stage6[1]}</Text> 
                        </TextWrapper>        
                    </Column2>
                    <Column3>
                        <TextWrapper>
                            <Date>{stage6[2]}</Date> 
                        </TextWrapper>        
                    </Column3>
                </InfoRow>
                
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection2;