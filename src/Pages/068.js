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
          نٓۚ وَٱلۡقَلَمِ وَمَا يَسۡطُرُونَ (1) مَآ أَنتَ بِنِعۡمَةِ رَبِّكَ
          بِمَجۡنُونٖ (2) وَإِنَّ لَكَ لَأَجۡرًا غَيۡرَ مَمۡنُونٖ (3) وَإِنَّكَ
          لَعَلَىٰ خُلُقٍ عَظِيمٖ (4) فَسَتُبۡصِرُ وَيُبۡصِرُونَ (5)
          بِأَييِّكُمُ ٱلۡمَفۡتُونُ (6) إِنَّ رَبَّكَ هُوَ أَعۡلَمُ بِمَن ضَلَّ
          عَن سَبِيلِهِۦ وَهُوَ أَعۡلَمُ بِٱلۡمُهۡتَدِينَ (7) فَلَا تُطِعِ
          ٱلۡمُكَذِّبِينَ (8) وَدُّواْ لَوۡ تُدۡهِنُ فَيُدۡهِنُونَ (9) وَلَا
          تُطِعۡ كُلَّ حَلَّافٖ مَّهِينٍ (10) هَمَّازٖ مَّشَّآءِۭ بِنَمِيمٖ
          (11) مَّنَّاعٖ لِّلۡخَيۡرِ مُعۡتَدٍ أَثِيمٍ (12) عُتُلِّۭ بَعۡدَ
          ذَٰلِكَ زَنِيمٍ (13) أَن كَانَ ذَا مَالٖ وَبَنِينَ (14) إِذَا تُتۡلَىٰ
          عَلَيۡهِ ءَايَٰتُنَا قَالَ أَسَٰطِيرُ ٱلۡأَوَّلِينَ (15) سَنَسِمُهُۥ
          عَلَى ٱلۡخُرۡطُومِ (16) إِنَّا بَلَوۡنَٰهُمۡ كَمَا بَلَوۡنَآ
          أَصۡحَٰبَ ٱلۡجَنَّةِ إِذۡ أَقۡسَمُواْ لَيَصۡرِمُنَّهَا مُصۡبِحِينَ
          (17) وَلَا يَسۡتَثۡنُونَ (18) فَطَافَ عَلَيۡهَا طَآئِفٞ مِّن رَّبِّكَ
          وَهُمۡ نَآئِمُونَ (19) فَأَصۡبَحَتۡ كَٱلصَّرِيمِ (20) فَتَنَادَوۡاْ
          مُصۡبِحِينَ (21) أَنِ ٱغۡدُواْ عَلَىٰ حَرۡثِكُمۡ إِن كُنتُمۡ
          صَٰرِمِينَ (22) فَٱنطَلَقُواْ وَهُمۡ يَتَخَٰفَتُونَ (23) أَن لَّا
          يَدۡخُلَنَّهَا ٱلۡيَوۡمَ عَلَيۡكُم مِّسۡكِينٞ (24) وَغَدَوۡاْ عَلَىٰ
          حَرۡدٖ قَٰدِرِينَ (25) فَلَمَّا رَأَوۡهَا قَالُوٓاْ إِنَّا
          لَضَآلُّونَ (26) بَلۡ نَحۡنُ مَحۡرُومُونَ (27) قَالَ أَوۡسَطُهُمۡ
          أَلَمۡ أَقُل لَّكُمۡ لَوۡلَا تُسَبِّحُونَ (28) قَالُواْ سُبۡحَٰنَ
          رَبِّنَآ إِنَّا كُنَّا ظَٰلِمِينَ (29) فَأَقۡبَلَ بَعۡضُهُمۡ عَلَىٰ
          بَعۡضٖ يَتَلَٰوَمُونَ (30) قَالُواْ يَٰوَيۡلَنَآ إِنَّا كُنَّا
          طَٰغِينَ (31) عَسَىٰ رَبُّنَآ أَن يُبۡدِلَنَا خَيۡرٗا مِّنۡهَآ
          إِنَّآ إِلَىٰ رَبِّنَا رَٰغِبُونَ (32) كَذَٰلِكَ ٱلۡعَذَابُۖ
          وَلَعَذَابُ ٱلۡأٓخِرَةِ أَكۡبَرُۚ لَوۡ كَانُواْ يَعۡلَمُونَ (33) إِنَّ
          لِلۡمُتَّقِينَ عِندَ رَبِّهِمۡ جَنَّٰتِ ٱلنَّعِيمِ (34) أَفَنَجۡعَلُ
          ٱلۡمُسۡلِمِينَ كَٱلۡمُجۡرِمِينَ (35) مَا لَكُمۡ كَيۡفَ تَحۡكُمُونَ
          (36) أَمۡ لَكُمۡ كِتَٰبٞ فِيهِ تَدۡرُسُونَ (37) إِنَّ لَكُمۡ فِيهِ
          لَمَا تَخَيَّرُونَ (38) أَمۡ لَكُمۡ أَيۡمَٰنٌ عَلَيۡنَا بَٰلِغَةٌ
          إِلَىٰ يَوۡمِ ٱلۡقِيَٰمَةِ إِنَّ لَكُمۡ لَمَا تَحۡكُمُونَ (39)
          سَلۡهُمۡ أَيُّهُم بِذَٰلِكَ زَعِيمٌ (40) أَمۡ لَهُمۡ شُرَكَآءُ
          فَلۡيَأۡتُواْ بِشُرَكَآئِهِمۡ إِن كَانُواْ صَٰدِقِينَ (41) يَوۡمَ
          يُكۡشَفُ عَن سَاقٖ وَيُدۡعَوۡنَ إِلَى ٱلسُّجُودِ فَلَا يَسۡتَطِيعُونَ
          (42) خَٰشِعَةً أَبۡصَٰرُهُمۡ تَرۡهَقُهُمۡ ذِلَّةٞۖ وَقَدۡ كَانُواْ
          يُدۡعَوۡنَ إِلَى ٱلسُّجُودِ وَهُمۡ سَٰلِمُونَ (43) فَذَرۡنِي وَمَن
          يُكَذِّبُ بِهَٰذَا ٱلۡحَدِيثِۖ سَنَسۡتَدۡرِجُهُم مِّنۡ حَيۡثُ لَا
          يَعۡلَمُونَ (44) وَأُمۡلِي لَهُمۡۚ إِنَّ كَيۡدِي مَتِينٌ (45) أَمۡ
          تَسۡـَٔلُهُمۡ أَجۡرٗا فَهُم مِّن مَّغۡرَمٖ مُّثۡقَلُونَ (46) أَمۡ
          عِندَهُمُ ٱلۡغَيۡبُ فَهُمۡ يَكۡتُبُونَ (47) فَٱصۡبِرۡ لِحُكۡمِ رَبِّكَ
          وَلَا تَكُن كَصَاحِبِ ٱلۡحُوتِ إِذۡ نَادَىٰ وَهُوَ مَكۡظُومٞ (48)
          لَّوۡلَآ أَن تَدَٰرَكَهُۥ نِعۡمَةٞ مِّن رَّبِّهِۦ لَنُبِذَ
          بِٱلۡعَرَآءِ وَهُوَ مَذۡمُومٞ (49) فَٱجۡتَبَٰهُ رَبُّهُۥ فَجَعَلَهُۥ
          مِنَ ٱلصَّٰلِحِينَ (50) وَإِن يَكَادُ ٱلَّذِينَ كَفَرُواْ
          لَيُزۡلِقُونَكَ بِأَبۡصَٰرِهِمۡ لَمَّا سَمِعُواْ ٱلذِّكۡرَ
          وَيَقُولُونَ إِنَّهُۥ لَمَجۡنُونٞ (51) وَمَا هُوَ إِلَّا ذِكۡرٞ
          لِّلۡعَٰلَمِينَ (52)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default SixtyEight;
