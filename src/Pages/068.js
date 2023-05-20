import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const SixtyEight = () => {
  return (
    <div>
      <Helmet>
        <title>068 - سورة القلم</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة القلم</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          نٓۚ وَٱلۡقَلَمِ وَمَا يَسۡطُرُونَ
          <span className="numberTheme"> (1) </span> مَآ أَنتَ بِنِعۡمَةِ
          رَبِّكَ بِمَجۡنُونٖ
          <span className="numberTheme"> (2) </span> وَإِنَّ لَكَ لَأَجۡرًا
          غَيۡرَ مَمۡنُونٖ
          <span className="numberTheme"> (3) </span> وَإِنَّكَ لَعَلَىٰ خُلُقٍ
          عَظِيمٖ
          <span className="numberTheme"> (4) </span> فَسَتُبۡصِرُ وَيُبۡصِرُونَ
          <span className="numberTheme"> (5) </span>
          بِأَييِّكُمُ ٱلۡمَفۡتُونُ
          <span className="numberTheme"> (6) </span> إِنَّ رَبَّكَ هُوَ أَعۡلَمُ
          بِمَن ضَلَّ عَن سَبِيلِهِۦ وَهُوَ أَعۡلَمُ بِٱلۡمُهۡتَدِينَ
          <span className="numberTheme"> (7) </span> فَلَا تُطِعِ
          ٱلۡمُكَذِّبِينَ
          <span className="numberTheme"> (8) </span> وَدُّواْ لَوۡ تُدۡهِنُ
          فَيُدۡهِنُونَ
          <span className="numberTheme"> (9) </span> وَلَا تُطِعۡ كُلَّ حَلَّافٖ
          مَّهِينٍ
          <span className="numberTheme"> (10) </span> هَمَّازٖ مَّشَّآءِۭ
          بِنَمِيمٖ
          <span className="numberTheme"> (11) </span> مَّنَّاعٖ لِّلۡخَيۡرِ
          مُعۡتَدٍ أَثِيمٍ
          <span className="numberTheme"> (12) </span> عُتُلِّۭ بَعۡدَ ذَٰلِكَ
          زَنِيمٍ
          <span className="numberTheme"> (13) </span> أَن كَانَ ذَا مَالٖ
          وَبَنِينَ
          <span className="numberTheme"> (14) </span> إِذَا تُتۡلَىٰ عَلَيۡهِ
          ءَايَٰتُنَا قَالَ أَسَٰطِيرُ ٱلۡأَوَّلِينَ
          <span className="numberTheme"> (15) </span> سَنَسِمُهُۥ عَلَى
          ٱلۡخُرۡطُومِ
          <span className="numberTheme"> (16) </span> إِنَّا بَلَوۡنَٰهُمۡ كَمَا
          بَلَوۡنَآ أَصۡحَٰبَ ٱلۡجَنَّةِ إِذۡ أَقۡسَمُواْ لَيَصۡرِمُنَّهَا
          مُصۡبِحِينَ
          <span className="numberTheme"> (17) </span> وَلَا يَسۡتَثۡنُونَ
          <span className="numberTheme"> (18) </span> فَطَافَ عَلَيۡهَا طَآئِفٞ
          مِّن رَّبِّكَ وَهُمۡ نَآئِمُونَ
          <span className="numberTheme"> (19) </span> فَأَصۡبَحَتۡ كَٱلصَّرِيمِ
          <span className="numberTheme"> (20) </span> فَتَنَادَوۡاْ مُصۡبِحِينَ
          <span className="numberTheme"> (21) </span> أَنِ ٱغۡدُواْ عَلَىٰ
          حَرۡثِكُمۡ إِن كُنتُمۡ صَٰرِمِينَ
          <span className="numberTheme"> (22) </span> فَٱنطَلَقُواْ وَهُمۡ
          يَتَخَٰفَتُونَ
          <span className="numberTheme"> (23) </span> أَن لَّا يَدۡخُلَنَّهَا
          ٱلۡيَوۡمَ عَلَيۡكُم مِّسۡكِينٞ
          <span className="numberTheme"> (24) </span> وَغَدَوۡاْ عَلَىٰ حَرۡدٖ
          قَٰدِرِينَ
          <span className="numberTheme"> (25) </span> فَلَمَّا رَأَوۡهَا
          قَالُوٓاْ إِنَّا لَضَآلُّونَ
          <span className="numberTheme"> (26) </span> بَلۡ نَحۡنُ مَحۡرُومُونَ
          <span className="numberTheme"> (27) </span> قَالَ أَوۡسَطُهُمۡ أَلَمۡ
          أَقُل لَّكُمۡ لَوۡلَا تُسَبِّحُونَ
          <span className="numberTheme"> (28) </span> قَالُواْ سُبۡحَٰنَ
          رَبِّنَآ إِنَّا كُنَّا ظَٰلِمِينَ
          <span className="numberTheme"> (29) </span> فَأَقۡبَلَ بَعۡضُهُمۡ
          عَلَىٰ بَعۡضٖ يَتَلَٰوَمُونَ
          <span className="numberTheme"> (30) </span> قَالُواْ يَٰوَيۡلَنَآ
          إِنَّا كُنَّا طَٰغِينَ
          <span className="numberTheme"> (31) </span> عَسَىٰ رَبُّنَآ أَن
          يُبۡدِلَنَا خَيۡرٗا مِّنۡهَآ إِنَّآ إِلَىٰ رَبِّنَا رَٰغِبُونَ
          <span className="numberTheme"> (32) </span> كَذَٰلِكَ ٱلۡعَذَابُۖ
          وَلَعَذَابُ ٱلۡأٓخِرَةِ أَكۡبَرُۚ لَوۡ كَانُواْ يَعۡلَمُونَ
          <span className="numberTheme"> (33) </span> إِنَّ لِلۡمُتَّقِينَ عِندَ
          رَبِّهِمۡ جَنَّٰتِ ٱلنَّعِيمِ
          <span className="numberTheme"> (34) </span> أَفَنَجۡعَلُ
          ٱلۡمُسۡلِمِينَ كَٱلۡمُجۡرِمِينَ
          <span className="numberTheme"> (35) </span> مَا لَكُمۡ كَيۡفَ
          تَحۡكُمُونَ
          <span className="numberTheme"> (36) </span> أَمۡ لَكُمۡ كِتَٰبٞ فِيهِ
          تَدۡرُسُونَ
          <span className="numberTheme"> (37) </span> إِنَّ لَكُمۡ فِيهِ لَمَا
          تَخَيَّرُونَ
          <span className="numberTheme"> (38) </span> أَمۡ لَكُمۡ أَيۡمَٰنٌ
          عَلَيۡنَا بَٰلِغَةٌ إِلَىٰ يَوۡمِ ٱلۡقِيَٰمَةِ إِنَّ لَكُمۡ لَمَا
          تَحۡكُمُونَ
          <span className="numberTheme"> (39) </span>
          سَلۡهُمۡ أَيُّهُم بِذَٰلِكَ زَعِيمٌ
          <span className="numberTheme"> (40) </span> أَمۡ لَهُمۡ شُرَكَآءُ
          فَلۡيَأۡتُواْ بِشُرَكَآئِهِمۡ إِن كَانُواْ صَٰدِقِينَ
          <span className="numberTheme"> (41) </span> يَوۡمَ يُكۡشَفُ عَن سَاقٖ
          وَيُدۡعَوۡنَ إِلَى ٱلسُّجُودِ فَلَا يَسۡتَطِيعُونَ
          <span className="numberTheme"> (42) </span> خَٰشِعَةً أَبۡصَٰرُهُمۡ
          تَرۡهَقُهُمۡ ذِلَّةٞۖ وَقَدۡ كَانُواْ يُدۡعَوۡنَ إِلَى ٱلسُّجُودِ
          وَهُمۡ سَٰلِمُونَ
          <span className="numberTheme"> (43) </span> فَذَرۡنِي وَمَن يُكَذِّبُ
          بِهَٰذَا ٱلۡحَدِيثِۖ سَنَسۡتَدۡرِجُهُم مِّنۡ حَيۡثُ لَا يَعۡلَمُونَ
          <span className="numberTheme"> (44) </span> وَأُمۡلِي لَهُمۡۚ إِنَّ
          كَيۡدِي مَتِينٌ
          <span className="numberTheme"> (45) </span> أَمۡ تَسۡـَٔلُهُمۡ أَجۡرٗا
          فَهُم مِّن مَّغۡرَمٖ مُّثۡقَلُونَ
          <span className="numberTheme"> (46) </span> أَمۡ عِندَهُمُ ٱلۡغَيۡبُ
          فَهُمۡ يَكۡتُبُونَ
          <span className="numberTheme"> (47) </span> فَٱصۡبِرۡ لِحُكۡمِ رَبِّكَ
          وَلَا تَكُن كَصَاحِبِ ٱلۡحُوتِ إِذۡ نَادَىٰ وَهُوَ مَكۡظُومٞ
          <span className="numberTheme"> (48) </span>
          لَّوۡلَآ أَن تَدَٰرَكَهُۥ نِعۡمَةٞ مِّن رَّبِّهِۦ لَنُبِذَ
          بِٱلۡعَرَآءِ وَهُوَ مَذۡمُومٞ
          <span className="numberTheme"> (49) </span> فَٱجۡتَبَٰهُ رَبُّهُۥ
          فَجَعَلَهُۥ مِنَ ٱلصَّٰلِحِينَ
          <span className="numberTheme"> (50) </span> وَإِن يَكَادُ ٱلَّذِينَ
          كَفَرُواْ لَيُزۡلِقُونَكَ بِأَبۡصَٰرِهِمۡ لَمَّا سَمِعُواْ ٱلذِّكۡرَ
          وَيَقُولُونَ إِنَّهُۥ لَمَجۡنُونٞ
          <span className="numberTheme"> (51) </span> وَمَا هُوَ إِلَّا ذِكۡرٞ
          لِّلۡعَٰلَمِينَ
          <span className="numberTheme"> (52) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default SixtyEight;
