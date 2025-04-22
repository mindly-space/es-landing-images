
import React, { useContext } from "react";
import { Container } from "./Container";
import { ProofItem } from "./ProofItem";
import { SupportedBy } from "./SupportedBy";
import { proofItemsEN, proofItemsES, supportedByEN, supportedByES } from "./data";
import { LanguageContext } from "@/contexts/LanguageContext";

export const SocialProof = () => {
  const { isEnglish } = useContext(LanguageContext);
  
  const proofItems = isEnglish ? proofItemsEN : proofItemsES;
  const supportedBy = isEnglish ? supportedByEN : supportedByES;
  
  return (
    <Container>
      {proofItems.map((item, index) => (
        <ProofItem key={index} item={item} index={index} />
      ))}
      <SupportedBy item={supportedBy} />
    </Container>
  );
};
