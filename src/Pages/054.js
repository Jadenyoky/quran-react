import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const FiftyFour = () => {
  return (
    <div>
      <Helmet>
        <title>054 - سورة القمر</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة القمر</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          ٱقۡتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ٱلۡقَمَرُ
          <span className="numberTheme"> (1) </span> وَإِن يَرَوۡاْ ءَايَةٗ
          يُعۡرِضُواْ وَيَقُولُواْ سِحۡرٞ مُّسۡتَمِرّٞ
          <span className="numberTheme"> (2) </span> وَكَذَّبُواْ وَٱتَّبَعُوٓاْ
          أَهۡوَآءَهُمۡۚ وَكُلُّ أَمۡرٖ مُّسۡتَقِرّٞ
          <span className="numberTheme"> (3) </span>
          وَلَقَدۡ جَآءَهُم مِّنَ ٱلۡأَنۢبَآءِ مَا فِيهِ مُزۡدَجَرٌ
          <span className="numberTheme"> (4) </span>
          حِكۡمَةُۢ بَٰلِغَةٞۖ فَمَا تُغۡنِ ٱلنُّذُرُ
          <span className="numberTheme"> (5) </span> فَتَوَلَّ عَنۡهُمۡۘ يَوۡمَ
          يَدۡعُ ٱلدَّاعِ إِلَىٰ شَيۡءٖ نُّكُرٍ
          <span className="numberTheme"> (6) </span> خُشَّعًا أَبۡصَٰرُهُمۡ
          يَخۡرُجُونَ مِنَ ٱلۡأَجۡدَاثِ كَأَنَّهُمۡ جَرَادٞ مُّنتَشِرٞ
          <span className="numberTheme"> (7) </span> مُّهۡطِعِينَ إِلَى
          ٱلدَّاعِۖ يَقُولُ ٱلۡكَٰفِرُونَ هَٰذَا يَوۡمٌ عَسِرٞ
          <span className="numberTheme"> (8) </span>
          <span className="partTheme"> ۞ </span>كَذَّبَتۡ قَبۡلَهُمۡ قَوۡمُ
          نُوحٖ فَكَذَّبُواْ عَبۡدَنَا وَقَالُواْ مَجۡنُونٞ وَٱزۡدُجِرَ
          <span className="numberTheme"> (9) </span> فَدَعَا رَبَّهُۥٓ أَنِّي
          مَغۡلُوبٞ فَٱنتَصِرۡ
          <span className="numberTheme"> (10) </span> فَفَتَحۡنَآ أَبۡوَٰبَ
          ٱلسَّمَآءِ بِمَآءٖ مُّنۡهَمِرٖ
          <span className="numberTheme"> (11) </span> وَفَجَّرۡنَا ٱلۡأَرۡضَ
          عُيُونٗا فَٱلۡتَقَى ٱلۡمَآءُ عَلَىٰٓ أَمۡرٖ قَدۡ قُدِرَ
          <span className="numberTheme"> (12) </span> وَحَمَلۡنَٰهُ عَلَىٰ ذَاتِ
          أَلۡوَٰحٖ وَدُسُرٖ
          <span className="numberTheme"> (13) </span> تَجۡرِي بِأَعۡيُنِنَا
          جَزَآءٗ لِّمَن كَانَ كُفِرَ
          <span className="numberTheme"> (14) </span> وَلَقَد تَّرَكۡنَٰهَآ
          ءَايَةٗ فَهَلۡ مِن مُّدَّكِرٖ
          <span className="numberTheme"> (15) </span> فَكَيۡفَ كَانَ عَذَابِي
          وَنُذُرِ
          <span className="numberTheme"> (16) </span> وَلَقَدۡ يَسَّرۡنَا
          ٱلۡقُرۡءَانَ لِلذِّكۡرِ فَهَلۡ مِن مُّدَّكِرٖ
          <span className="numberTheme"> (17) </span>
          كَذَّبَتۡ عَادٞ فَكَيۡفَ كَانَ عَذَابِي وَنُذُرِ
          <span className="numberTheme"> (18) </span> إِنَّآ أَرۡسَلۡنَا
          عَلَيۡهِمۡ رِيحٗا صَرۡصَرٗا فِي يَوۡمِ نَحۡسٖ مُّسۡتَمِرّٖ
          <span className="numberTheme"> (19) </span> تَنزِعُ ٱلنَّاسَ
          كَأَنَّهُمۡ أَعۡجَازُ نَخۡلٖ مُّنقَعِرٖ
          <span className="numberTheme"> (20) </span>
          فَكَيۡفَ كَانَ عَذَابِي وَنُذُرِ
          <span className="numberTheme"> (21) </span> وَلَقَدۡ يَسَّرۡنَا
          ٱلۡقُرۡءَانَ لِلذِّكۡرِ فَهَلۡ مِن مُّدَّكِرٖ
          <span className="numberTheme"> (22) </span> كَذَّبَتۡ ثَمُودُ
          بِٱلنُّذُرِ
          <span className="numberTheme"> (23) </span> فَقَالُوٓاْ أَبَشَرٗا
          مِّنَّا وَٰحِدٗا نَّتَّبِعُهُۥٓ إِنَّآ إِذٗا لَّفِي ضَلَٰلٖ وَسُعُرٍ
          <span className="numberTheme"> (24) </span> أَءُلۡقِيَ ٱلذِّكۡرُ
          عَلَيۡهِ مِنۢ بَيۡنِنَا بَلۡ هُوَ كَذَّابٌ أَشِرٞ
          <span className="numberTheme"> (25) </span> سَيَعۡلَمُونَ غَدٗا مَّنِ
          ٱلۡكَذَّابُ ٱلۡأَشِرُ
          <span className="numberTheme"> (26) </span> إِنَّا مُرۡسِلُواْ
          ٱلنَّاقَةِ فِتۡنَةٗ لَّهُمۡ فَٱرۡتَقِبۡهُمۡ وَٱصۡطَبِرۡ
          <span className="numberTheme"> (27) </span> وَنَبِّئۡهُمۡ أَنَّ
          ٱلۡمَآءَ قِسۡمَةُۢ بَيۡنَهُمۡۖ كُلُّ شِرۡبٖ مُّحۡتَضَرٞ
          <span className="numberTheme"> (28) </span> فَنَادَوۡاْ صَاحِبَهُمۡ
          فَتَعَاطَىٰ فَعَقَرَ
          <span className="numberTheme"> (29) </span> فَكَيۡفَ كَانَ عَذَابِي
          وَنُذُرِ
          <span className="numberTheme"> (30) </span> إِنَّآ أَرۡسَلۡنَا
          عَلَيۡهِمۡ صَيۡحَةٗ وَٰحِدَةٗ فَكَانُواْ كَهَشِيمِ ٱلۡمُحۡتَظِرِ
          <span className="numberTheme"> (31) </span> وَلَقَدۡ يَسَّرۡنَا
          ٱلۡقُرۡءَانَ لِلذِّكۡرِ فَهَلۡ مِن مُّدَّكِرٖ
          <span className="numberTheme"> (32) </span> كَذَّبَتۡ قَوۡمُ لُوطِۭ
          بِٱلنُّذُرِ
          <span className="numberTheme"> (33) </span> إِنَّآ أَرۡسَلۡنَا
          عَلَيۡهِمۡ حَاصِبًا إِلَّآ ءَالَ لُوطٖۖ نَّجَّيۡنَٰهُم بِسَحَرٖ
          <span className="numberTheme"> (34) </span> نِّعۡمَةٗ مِّنۡ عِندِنَاۚ
          كَذَٰلِكَ نَجۡزِي مَن شَكَرَ
          <span className="numberTheme"> (35) </span> وَلَقَدۡ أَنذَرَهُم
          بَطۡشَتَنَا فَتَمَارَوۡاْ بِٱلنُّذُرِ
          <span className="numberTheme"> (36) </span> وَلَقَدۡ رَٰوَدُوهُ عَن
          ضَيۡفِهِۦ فَطَمَسۡنَآ أَعۡيُنَهُمۡ فَذُوقُواْ عَذَابِي وَنُذُرِ
          <span className="numberTheme"> (37) </span> وَلَقَدۡ صَبَّحَهُم
          بُكۡرَةً عَذَابٞ مُّسۡتَقِرّٞ
          <span className="numberTheme"> (38) </span> فَذُوقُواْ عَذَابِي
          وَنُذُرِ
          <span className="numberTheme"> (39) </span> وَلَقَدۡ يَسَّرۡنَا
          ٱلۡقُرۡءَانَ لِلذِّكۡرِ فَهَلۡ مِن مُّدَّكِرٖ
          <span className="numberTheme"> (40) </span> وَلَقَدۡ جَآءَ ءَالَ
          فِرۡعَوۡنَ ٱلنُّذُرُ
          <span className="numberTheme"> (41) </span>
          كَذَّبُواْ بِـَٔايَٰتِنَا كُلِّهَا فَأَخَذۡنَٰهُمۡ أَخۡذَ عَزِيزٖ
          مُّقۡتَدِرٍ
          <span className="numberTheme"> (42) </span> أَكُفَّارُكُمۡ خَيۡرٞ
          مِّنۡ أُوْلَٰٓئِكُمۡ أَمۡ لَكُم بَرَآءَةٞ فِي ٱلزُّبُرِ
          <span className="numberTheme"> (43) </span> أَمۡ يَقُولُونَ نَحۡنُ
          جَمِيعٞ مُّنتَصِرٞ
          <span className="numberTheme"> (44) </span> سَيُهۡزَمُ ٱلۡجَمۡعُ
          وَيُوَلُّونَ ٱلدُّبُرَ
          <span className="numberTheme"> (45) </span> بَلِ ٱلسَّاعَةُ
          مَوۡعِدُهُمۡ وَٱلسَّاعَةُ أَدۡهَىٰ وَأَمَرُّ
          <span className="numberTheme"> (46) </span> إِنَّ ٱلۡمُجۡرِمِينَ فِي
          ضَلَٰلٖ وَسُعُرٖ
          <span className="numberTheme"> (47) </span> يَوۡمَ يُسۡحَبُونَ فِي
          ٱلنَّارِ عَلَىٰ وُجُوهِهِمۡ ذُوقُواْ مَسَّ سَقَرَ
          <span className="numberTheme"> (48) </span> إِنَّا كُلَّ شَيۡءٍ
          خَلَقۡنَٰهُ بِقَدَرٖ
          <span className="numberTheme"> (49) </span> وَمَآ أَمۡرُنَآ إِلَّا
          وَٰحِدَةٞ كَلَمۡحِۭ بِٱلۡبَصَرِ
          <span className="numberTheme"> (50) </span> وَلَقَدۡ أَهۡلَكۡنَآ
          أَشۡيَاعَكُمۡ فَهَلۡ مِن مُّدَّكِرٖ
          <span className="numberTheme"> (51) </span> وَكُلُّ شَيۡءٖ فَعَلُوهُ
          فِي ٱلزُّبُرِ
          <span className="numberTheme"> (52) </span>
          وَكُلُّ صَغِيرٖ وَكَبِيرٖ مُّسۡتَطَرٌ
          <span className="numberTheme"> (53) </span> إِنَّ ٱلۡمُتَّقِينَ فِي
          جَنَّٰتٖ وَنَهَرٖ
          <span className="numberTheme"> (54) </span> فِي مَقۡعَدِ صِدۡقٍ عِندَ
          مَلِيكٖ مُّقۡتَدِرِۭ
          <span className="numberTheme"> (55) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default FiftyFour;
