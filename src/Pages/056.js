import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const FiftySix = () => {
  return (
    <div>
      <Helmet>
        <title>056 - سورة الواقعة</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الواقعة</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِذَا وَقَعَتِ ٱلۡوَاقِعَةُ
          <span className="numberTheme"> (1) </span> لَيۡسَ لِوَقۡعَتِهَا
          كَاذِبَةٌ
          <span className="numberTheme"> (2) </span>
          خَافِضَةٞ رَّافِعَةٌ
          <span className="numberTheme"> (3) </span> إِذَا رُجَّتِ ٱلۡأَرۡضُ
          رَجّٗا
          <span className="numberTheme"> (4) </span> وَبُسَّتِ ٱلۡجِبَالُ بَسّٗا
          <span className="numberTheme"> (5) </span> فَكَانَتۡ هَبَآءٗ
          مُّنۢبَثّٗا
          <span className="numberTheme"> (6) </span> وَكُنتُمۡ أَزۡوَٰجٗا
          ثَلَٰثَةٗ
          <span className="numberTheme"> (7) </span> فَأَصۡحَٰبُ ٱلۡمَيۡمَنَةِ
          مَآ أَصۡحَٰبُ ٱلۡمَيۡمَنَةِ
          <span className="numberTheme"> (8) </span> وَأَصۡحَٰبُ ٱلۡمَشۡـَٔمَةِ
          مَآ أَصۡحَٰبُ ٱلۡمَشۡـَٔمَةِ
          <span className="numberTheme"> (9) </span> وَٱلسَّٰبِقُونَ
          ٱلسَّٰبِقُونَ
          <span className="numberTheme"> (10) </span> أُوْلَٰٓئِكَ
          ٱلۡمُقَرَّبُونَ
          <span className="numberTheme"> (11) </span> فِي جَنَّٰتِ ٱلنَّعِيمِ
          <span className="numberTheme"> (12) </span> ثُلَّةٞ مِّنَ
          ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (13) </span> وَقَلِيلٞ مِّنَ
          ٱلۡأٓخِرِينَ
          <span className="numberTheme"> (14) </span> عَلَىٰ سُرُرٖ مَّوۡضُونَةٖ
          <span className="numberTheme"> (15) </span> مُّتَّكِـِٔينَ عَلَيۡهَا
          مُتَقَٰبِلِينَ
          <span className="numberTheme"> (16) </span> يَطُوفُ عَلَيۡهِمۡ
          وِلۡدَٰنٞ مُّخَلَّدُونَ
          <span className="numberTheme"> (17) </span> بِأَكۡوَابٖ وَأَبَارِيقَ
          وَكَأۡسٖ مِّن مَّعِينٖ
          <span className="numberTheme"> (18) </span> لَّا يُصَدَّعُونَ عَنۡهَا
          وَلَا يُنزِفُونَ
          <span className="numberTheme"> (19) </span> وَفَٰكِهَةٖ مِّمَّا
          يَتَخَيَّرُونَ
          <span className="numberTheme"> (20) </span> وَلَحۡمِ طَيۡرٖ مِّمَّا
          يَشۡتَهُونَ
          <span className="numberTheme"> (21) </span> وَحُورٌ عِينٞ
          <span className="numberTheme"> (22) </span> كَأَمۡثَٰلِ ٱللُّؤۡلُوِٕ
          ٱلۡمَكۡنُونِ
          <span className="numberTheme"> (23) </span> جَزَآءَۢ بِمَا كَانُواْ
          يَعۡمَلُونَ
          <span className="numberTheme"> (24) </span> لَا يَسۡمَعُونَ فِيهَا
          لَغۡوٗا وَلَا تَأۡثِيمًا
          <span className="numberTheme"> (25) </span> إِلَّا قِيلٗا سَلَٰمٗا
          سَلَٰمٗا
          <span className="numberTheme"> (26) </span> وَأَصۡحَٰبُ ٱلۡيَمِينِ
          مَآ أَصۡحَٰبُ ٱلۡيَمِينِ
          <span className="numberTheme"> (27) </span> فِي سِدۡرٖ مَّخۡضُودٖ
          <span className="numberTheme"> (28) </span> وَطَلۡحٖ مَّنضُودٖ
          <span className="numberTheme"> (29) </span>
          وَظِلّٖ مَّمۡدُودٖ
          <span className="numberTheme"> (30) </span> وَمَآءٖ مَّسۡكُوبٖ
          <span className="numberTheme"> (31) </span> وَفَٰكِهَةٖ كَثِيرَةٖ
          <span className="numberTheme"> (32) </span> لَّا مَقۡطُوعَةٖ وَلَا
          مَمۡنُوعَةٖ
          <span className="numberTheme"> (33) </span> وَفُرُشٖ مَّرۡفُوعَةٍ
          <span className="numberTheme"> (34) </span> إِنَّآ أَنشَأۡنَٰهُنَّ
          إِنشَآءٗ
          <span className="numberTheme"> (35) </span> فَجَعَلۡنَٰهُنَّ
          أَبۡكَارًا
          <span className="numberTheme"> (36) </span> عُرُبًا أَتۡرَابٗا
          <span className="numberTheme"> (37) </span> لِّأَصۡحَٰبِ ٱلۡيَمِينِ
          <span className="numberTheme"> (38) </span>
          ثُلَّةٞ مِّنَ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (39) </span> وَثُلَّةٞ مِّنَ
          ٱلۡأٓخِرِينَ
          <span className="numberTheme"> (40) </span>
          وَأَصۡحَٰبُ ٱلشِّمَالِ مَآ أَصۡحَٰبُ ٱلشِّمَالِ
          <span className="numberTheme"> (41) </span> فِي سَمُومٖ وَحَمِيمٖ
          <span className="numberTheme"> (42) </span> وَظِلّٖ مِّن يَحۡمُومٖ
          <span className="numberTheme"> (43) </span> لَّا بَارِدٖ وَلَا كَرِيمٍ
          <span className="numberTheme"> (44) </span> إِنَّهُمۡ كَانُواْ قَبۡلَ
          ذَٰلِكَ مُتۡرَفِينَ
          <span className="numberTheme"> (45) </span> وَكَانُواْ يُصِرُّونَ
          عَلَى ٱلۡحِنثِ ٱلۡعَظِيمِ
          <span className="numberTheme"> (46) </span> وَكَانُواْ يَقُولُونَ
          أَئِذَا مِتۡنَا وَكُنَّا تُرَابٗا وَعِظَٰمًا أَءِنَّا لَمَبۡعُوثُونَ
          <span className="numberTheme"> (47) </span> أَوَ ءَابَآؤُنَا
          ٱلۡأَوَّلُونَ
          <span className="numberTheme"> (48) </span> قُلۡ إِنَّ ٱلۡأَوَّلِينَ
          وَٱلۡأٓخِرِينَ
          <span className="numberTheme"> (49) </span> لَمَجۡمُوعُونَ إِلَىٰ
          مِيقَٰتِ يَوۡمٖ مَّعۡلُومٖ
          <span className="numberTheme"> (50) </span> ثُمَّ إِنَّكُمۡ أَيُّهَا
          ٱلضَّآلُّونَ ٱلۡمُكَذِّبُونَ
          <span className="numberTheme"> (51) </span>
          لَأٓكِلُونَ مِن شَجَرٖ مِّن زَقُّومٖ
          <span className="numberTheme"> (52) </span> فَمَالِـُٔونَ مِنۡهَا
          ٱلۡبُطُونَ
          <span className="numberTheme"> (53) </span> فَشَٰرِبُونَ عَلَيۡهِ مِنَ
          ٱلۡحَمِيمِ
          <span className="numberTheme"> (54) </span>
          فَشَٰرِبُونَ شُرۡبَ ٱلۡهِيمِ
          <span className="numberTheme"> (55) </span> هَٰذَا نُزُلُهُمۡ يَوۡمَ
          ٱلدِّينِ
          <span className="numberTheme"> (56) </span> نَحۡنُ خَلَقۡنَٰكُمۡ
          فَلَوۡلَا تُصَدِّقُونَ
          <span className="numberTheme"> (57) </span> أَفَرَءَيۡتُم مَّا
          تُمۡنُونَ
          <span className="numberTheme"> (58) </span> ءَأَنتُمۡ تَخۡلُقُونَهُۥٓ
          أَمۡ نَحۡنُ ٱلۡخَٰلِقُونَ
          <span className="numberTheme"> (59) </span> نَحۡنُ قَدَّرۡنَا
          بَيۡنَكُمُ ٱلۡمَوۡتَ وَمَا نَحۡنُ بِمَسۡبُوقِينَ
          <span className="numberTheme"> (60) </span> عَلَىٰٓ أَن نُّبَدِّلَ
          أَمۡثَٰلَكُمۡ وَنُنشِئَكُمۡ فِي مَا لَا تَعۡلَمُونَ
          <span className="numberTheme"> (61) </span> وَلَقَدۡ عَلِمۡتُمُ
          ٱلنَّشۡأَةَ ٱلۡأُولَىٰ فَلَوۡلَا تَذَكَّرُونَ
          <span className="numberTheme"> (62) </span> أَفَرَءَيۡتُم مَّا
          تَحۡرُثُونَ
          <span className="numberTheme"> (63) </span> ءَأَنتُمۡ تَزۡرَعُونَهُۥٓ
          أَمۡ نَحۡنُ ٱلزَّٰرِعُونَ
          <span className="numberTheme"> (64) </span> لَوۡ نَشَآءُ
          لَجَعَلۡنَٰهُ حُطَٰمٗا فَظَلۡتُمۡ تَفَكَّهُونَ
          <span className="numberTheme"> (65) </span> إِنَّا لَمُغۡرَمُونَ
          <span className="numberTheme"> (66) </span> بَلۡ نَحۡنُ مَحۡرُومُونَ
          <span className="numberTheme"> (67) </span> أَفَرَءَيۡتُمُ ٱلۡمَآءَ
          ٱلَّذِي تَشۡرَبُونَ
          <span className="numberTheme"> (68) </span> ءَأَنتُمۡ أَنزَلۡتُمُوهُ
          مِنَ ٱلۡمُزۡنِ أَمۡ نَحۡنُ ٱلۡمُنزِلُونَ
          <span className="numberTheme"> (69) </span> لَوۡ نَشَآءُ جَعَلۡنَٰهُ
          أُجَاجٗا فَلَوۡلَا تَشۡكُرُونَ
          <span className="numberTheme"> (70) </span> أَفَرَءَيۡتُمُ ٱلنَّارَ
          ٱلَّتِي تُورُونَ
          <span className="numberTheme"> (71) </span> ءَأَنتُمۡ أَنشَأۡتُمۡ
          شَجَرَتَهَآ أَمۡ نَحۡنُ ٱلۡمُنشِـُٔونَ
          <span className="numberTheme"> (72) </span> نَحۡنُ جَعَلۡنَٰهَا
          تَذۡكِرَةٗ وَمَتَٰعٗا لِّلۡمُقۡوِينَ
          <span className="numberTheme"> (73) </span> فَسَبِّحۡ بِٱسۡمِ رَبِّكَ
          ٱلۡعَظِيمِ
          <span className="numberTheme"> (74) </span>
          <span className="partTheme"> ۞ </span>فَلَآ أُقۡسِمُ بِمَوَٰقِعِ
          ٱلنُّجُومِ
          <span className="numberTheme"> (75) </span> وَإِنَّهُۥ لَقَسَمٞ لَّوۡ
          تَعۡلَمُونَ عَظِيمٌ
          <span className="numberTheme"> (76) </span> إِنَّهُۥ لَقُرۡءَانٞ
          كَرِيمٞ
          <span className="numberTheme"> (77) </span> فِي كِتَٰبٖ مَّكۡنُونٖ
          <span className="numberTheme"> (78) </span> لَّا يَمَسُّهُۥٓ إِلَّا
          ٱلۡمُطَهَّرُونَ
          <span className="numberTheme"> (79) </span> تَنزِيلٞ مِّن رَّبِّ
          ٱلۡعَٰلَمِينَ
          <span className="numberTheme"> (80) </span> أَفَبِهَٰذَا ٱلۡحَدِيثِ
          أَنتُم مُّدۡهِنُونَ
          <span className="numberTheme"> (81) </span> وَتَجۡعَلُونَ رِزۡقَكُمۡ
          أَنَّكُمۡ تُكَذِّبُونَ
          <span className="numberTheme"> (82) </span>
          فَلَوۡلَآ إِذَا بَلَغَتِ ٱلۡحُلۡقُومَ
          <span className="numberTheme"> (83) </span> وَأَنتُمۡ حِينَئِذٖ
          تَنظُرُونَ
          <span className="numberTheme"> (84) </span> وَنَحۡنُ أَقۡرَبُ إِلَيۡهِ
          مِنكُمۡ وَلَٰكِن لَّا تُبۡصِرُونَ
          <span className="numberTheme"> (85) </span> فَلَوۡلَآ إِن كُنتُمۡ
          غَيۡرَ مَدِينِينَ
          <span className="numberTheme"> (86) </span>
          تَرۡجِعُونَهَآ إِن كُنتُمۡ صَٰدِقِينَ
          <span className="numberTheme"> (87) </span> فَأَمَّآ إِن كَانَ مِنَ
          ٱلۡمُقَرَّبِينَ
          <span className="numberTheme"> (88) </span> فَرَوۡحٞ وَرَيۡحَانٞ
          وَجَنَّتُ نَعِيمٖ
          <span className="numberTheme"> (89) </span>
          وَأَمَّآ إِن كَانَ مِنۡ أَصۡحَٰبِ ٱلۡيَمِينِ
          <span className="numberTheme"> (90) </span> فَسَلَٰمٞ لَّكَ مِنۡ
          أَصۡحَٰبِ ٱلۡيَمِينِ
          <span className="numberTheme"> (91) </span> وَأَمَّآ إِن كَانَ مِنَ
          ٱلۡمُكَذِّبِينَ ٱلضَّآلِّينَ
          <span className="numberTheme"> (92) </span> فَنُزُلٞ مِّنۡ حَمِيمٖ
          <span className="numberTheme"> (93) </span>
          وَتَصۡلِيَةُ جَحِيمٍ
          <span className="numberTheme"> (94) </span> إِنَّ هَٰذَا لَهُوَ حَقُّ
          ٱلۡيَقِينِ
          <span className="numberTheme"> (95) </span>
          فَسَبِّحۡ بِٱسۡمِ رَبِّكَ ٱلۡعَظِيمِ
          <span className="numberTheme"> (96) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default FiftySix;
