"use client";

import BankPartners from "../../components/loansection/BankPartners";
import HomeLoanCalculator from "../../components/loansection/HomeLoanCalculator";
import HowItWorks from "../../components/loansection/HowItWorks";
import LoanFaqs from "../../components/loansection/LoanFaqs";
import LoanHero from "../../components/loansection/LoanHero";
import LoanOffers from "../../components/loansection/LoanOffers";
import PersonalizedDeals from "../../components/loansection/PersonalizedDeals";
import PropertyNotFinalized from "../../components/loansection/PropertyNotFinalized";
import TestimonialsSlider from "../../components/loansection/TestimonialsSlider";

export default function HomeIndex() {
  return (
    <>
       <LoanHero/>
       <LoanOffers/>
       <HowItWorks/>
       <BankPartners/>
       <PropertyNotFinalized/>
       <PersonalizedDeals/>
       <HomeLoanCalculator/>
       <LoanFaqs/>
       <TestimonialsSlider/>
    </>
  );
}
