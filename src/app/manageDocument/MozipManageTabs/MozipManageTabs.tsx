import styled from "styled-components";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import CustomButton from "@/components/CustomButton";
import { IoIosArrowForward } from "react-icons/io";

const CustomTabs = styled(CustomRow)`
  padding-top: 3rem;
`;

interface MozipManageTabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function MozipManageTabs({
  activeTab,
  setActiveTab,
}: MozipManageTabsProps) {
  return (
    <CustomTabs
      $width="100%"
      $alignitems="center"
      $justifycontent="flex-start"
      $gap="1rem"
    >
      <CustomButton
        $width="auto"
        $backgroundColor="transparent"
        $padding="0"
        onClick={() => setActiveTab("서류 관리")}
      >
        <CustomRow
          $width="auto"
          $alignitems="center"
          $justifycontent="center"
          $gap="0.5rem"
        >
          <CustomFont $color="black" $font="1.2rem" $fontweight="bold">
            서류 관리
          </CustomFont>
          {activeTab === "서류 관리" && (
            <StyledImg src={"/icon_TabStar.png"} $width="1rem" $height="1rem" />
          )}
        </CustomRow>
      </CustomButton>

      <IoIosArrowForward />

      <CustomButton
        $width="auto"
        $backgroundColor="transparent"
        $padding="0"
        onClick={() => setActiveTab("면접 관리")}
      >
        <CustomRow
          $width="auto"
          $alignitems="center"
          $justifycontent="center"
          $gap="0.5rem"
        >
          <CustomFont $color="black" $font="1.2rem" $fontweight="bold">
            면접 관리
          </CustomFont>
          {activeTab === "면접 관리" && (
            <StyledImg src={"/icon_TabStar.png"} $width="1rem" $height="1rem" />
          )}
        </CustomRow>
      </CustomButton>

      <IoIosArrowForward />

      <CustomButton
        $width="auto"
        $backgroundColor="transparent"
        $padding="0"
        onClick={() => setActiveTab("합불 관리")}
      >
        <CustomRow
          $width="auto"
          $alignitems="center"
          $justifycontent="center"
          $gap="0.5rem"
        >
          <CustomFont $color="black" $font="1.2rem" $fontweight="bold">
            합불 관리
          </CustomFont>
          {activeTab === "합불 관리" && (
            <StyledImg src={"/icon_TabStar.png"} $width="1rem" $height="1rem" />
          )}
        </CustomRow>
      </CustomButton>
    </CustomTabs>
  );
}
