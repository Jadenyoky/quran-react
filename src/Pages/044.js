import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const FourtyFour = () => {
  return (
    <div>
      <Helmet>
        <title>044 - سورة الدخان</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الدخان</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          حمٓ (1) وَٱلۡكِتَٰبِ ٱلۡمُبِينِ (2) إِنَّآ أَنزَلۡنَٰهُ فِي لَيۡلَةٖ
          مُّبَٰرَكَةٍۚ إِنَّا كُنَّا مُنذِرِينَ (3) فِيهَا يُفۡرَقُ كُلُّ
          أَمۡرٍ حَكِيمٍ (4) أَمۡرٗا مِّنۡ عِندِنَآۚ إِنَّا كُنَّا مُرۡسِلِينَ
          (5) رَحۡمَةٗ مِّن رَّبِّكَۚ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ (6)
          رَبِّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَآۖ إِن كُنتُم
          مُّوقِنِينَ (7) لَآ إِلَٰهَ إِلَّا هُوَ يُحۡيِۦ وَيُمِيتُۖ رَبُّكُمۡ
          وَرَبُّ ءَابَآئِكُمُ ٱلۡأَوَّلِينَ (8) بَلۡ هُمۡ فِي شَكّٖ
          يَلۡعَبُونَ (9) فَٱرۡتَقِبۡ يَوۡمَ تَأۡتِي ٱلسَّمَآءُ بِدُخَانٖ
          مُّبِينٖ (10) يَغۡشَى ٱلنَّاسَۖ هَٰذَا عَذَابٌ أَلِيمٞ (11) رَّبَّنَا
          ٱكۡشِفۡ عَنَّا ٱلۡعَذَابَ إِنَّا مُؤۡمِنُونَ (12) أَنَّىٰ لَهُمُ
          ٱلذِّكۡرَىٰ وَقَدۡ جَآءَهُمۡ رَسُولٞ مُّبِينٞ (13) ثُمَّ تَوَلَّوۡاْ
          عَنۡهُ وَقَالُواْ مُعَلَّمٞ مَّجۡنُونٌ (14) إِنَّا كَاشِفُواْ
          ٱلۡعَذَابِ قَلِيلًاۚ إِنَّكُمۡ عَآئِدُونَ (15) يَوۡمَ نَبۡطِشُ
          ٱلۡبَطۡشَةَ ٱلۡكُبۡرَىٰٓ إِنَّا مُنتَقِمُونَ (16) ۞وَلَقَدۡ فَتَنَّا
          قَبۡلَهُمۡ قَوۡمَ فِرۡعَوۡنَ وَجَآءَهُمۡ رَسُولٞ كَرِيمٌ (17) أَنۡ
          أَدُّوٓاْ إِلَيَّ عِبَادَ ٱللَّهِۖ إِنِّي لَكُمۡ رَسُولٌ أَمِينٞ (18)
          وَأَن لَّا تَعۡلُواْ عَلَى ٱللَّهِۖ إِنِّيٓ ءَاتِيكُم بِسُلۡطَٰنٖ
          مُّبِينٖ (19) وَإِنِّي عُذۡتُ بِرَبِّي وَرَبِّكُمۡ أَن تَرۡجُمُونِ
          (20) وَإِن لَّمۡ تُؤۡمِنُواْ لِي فَٱعۡتَزِلُونِ (21) فَدَعَا رَبَّهُۥٓ
          أَنَّ هَٰٓؤُلَآءِ قَوۡمٞ مُّجۡرِمُونَ (22) فَأَسۡرِ بِعِبَادِي
          لَيۡلًا إِنَّكُم مُّتَّبَعُونَ (23) وَٱتۡرُكِ ٱلۡبَحۡرَ رَهۡوًاۖ
          إِنَّهُمۡ جُندٞ مُّغۡرَقُونَ (24) كَمۡ تَرَكُواْ مِن جَنَّٰتٖ
          وَعُيُونٖ (25) وَزُرُوعٖ وَمَقَامٖ كَرِيمٖ (26) وَنَعۡمَةٖ كَانُواْ
          فِيهَا فَٰكِهِينَ (27) كَذَٰلِكَۖ وَأَوۡرَثۡنَٰهَا قَوۡمًا ءَاخَرِينَ
          (28) فَمَا بَكَتۡ عَلَيۡهِمُ ٱلسَّمَآءُ وَٱلۡأَرۡضُ وَمَا كَانُواْ
          مُنظَرِينَ (29) وَلَقَدۡ نَجَّيۡنَا بَنِيٓ إِسۡرَٰٓءِيلَ مِنَ
          ٱلۡعَذَابِ ٱلۡمُهِينِ (30) مِن فِرۡعَوۡنَۚ إِنَّهُۥ كَانَ عَالِيٗا
          مِّنَ ٱلۡمُسۡرِفِينَ (31) وَلَقَدِ ٱخۡتَرۡنَٰهُمۡ عَلَىٰ عِلۡمٍ عَلَى
          ٱلۡعَٰلَمِينَ (32) وَءَاتَيۡنَٰهُم مِّنَ ٱلۡأٓيَٰتِ مَا فِيهِ
          بَلَٰٓؤٞاْ مُّبِينٌ (33) إِنَّ هَٰٓؤُلَآءِ لَيَقُولُونَ (34) إِنۡ
          هِيَ إِلَّا مَوۡتَتُنَا ٱلۡأُولَىٰ وَمَا نَحۡنُ بِمُنشَرِينَ (35)
          فَأۡتُواْ بِـَٔابَآئِنَآ إِن كُنتُمۡ صَٰدِقِينَ (36) أَهُمۡ خَيۡرٌ
          أَمۡ قَوۡمُ تُبَّعٖ وَٱلَّذِينَ مِن قَبۡلِهِمۡ أَهۡلَكۡنَٰهُمۡۚ
          إِنَّهُمۡ كَانُواْ مُجۡرِمِينَ (37) وَمَا خَلَقۡنَا ٱلسَّمَٰوَٰتِ
          وَٱلۡأَرۡضَ وَمَا بَيۡنَهُمَا لَٰعِبِينَ (38) مَا خَلَقۡنَٰهُمَآ
          إِلَّا بِٱلۡحَقِّ وَلَٰكِنَّ أَكۡثَرَهُمۡ لَا يَعۡلَمُونَ (39) إِنَّ
          يَوۡمَ ٱلۡفَصۡلِ مِيقَٰتُهُمۡ أَجۡمَعِينَ (40) يَوۡمَ لَا يُغۡنِي
          مَوۡلًى عَن مَّوۡلٗى شَيۡـٔٗا وَلَا هُمۡ يُنصَرُونَ (41) إِلَّا مَن
          رَّحِمَ ٱللَّهُۚ إِنَّهُۥ هُوَ ٱلۡعَزِيزُ ٱلرَّحِيمُ (42) إِنَّ
          شَجَرَتَ ٱلزَّقُّومِ (43) طَعَامُ ٱلۡأَثِيمِ (44) كَٱلۡمُهۡلِ يَغۡلِي
          فِي ٱلۡبُطُونِ (45) كَغَلۡيِ ٱلۡحَمِيمِ (46) خُذُوهُ فَٱعۡتِلُوهُ
          إِلَىٰ سَوَآءِ ٱلۡجَحِيمِ (47) ثُمَّ صُبُّواْ فَوۡقَ رَأۡسِهِۦ مِنۡ
          عَذَابِ ٱلۡحَمِيمِ (48) ذُقۡ إِنَّكَ أَنتَ ٱلۡعَزِيزُ ٱلۡكَرِيمُ (49)
          إِنَّ هَٰذَا مَا كُنتُم بِهِۦ تَمۡتَرُونَ (50) إِنَّ ٱلۡمُتَّقِينَ فِي
          مَقَامٍ أَمِينٖ (51) فِي جَنَّٰتٖ وَعُيُونٖ (52) يَلۡبَسُونَ مِن
          سُندُسٖ وَإِسۡتَبۡرَقٖ مُّتَقَٰبِلِينَ (53) كَذَٰلِكَ وَزَوَّجۡنَٰهُم
          بِحُورٍ عِينٖ (54) يَدۡعُونَ فِيهَا بِكُلِّ فَٰكِهَةٍ ءَامِنِينَ (55)
          لَا يَذُوقُونَ فِيهَا ٱلۡمَوۡتَ إِلَّا ٱلۡمَوۡتَةَ ٱلۡأُولَىٰۖ
          وَوَقَىٰهُمۡ عَذَابَ ٱلۡجَحِيمِ (56) فَضۡلٗا مِّن رَّبِّكَۚ ذَٰلِكَ
          هُوَ ٱلۡفَوۡزُ ٱلۡعَظِيمُ (57) فَإِنَّمَا يَسَّرۡنَٰهُ بِلِسَانِكَ
          لَعَلَّهُمۡ يَتَذَكَّرُونَ (58) فَٱرۡتَقِبۡ إِنَّهُم مُّرۡتَقِبُونَ
          (59)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default FourtyFour;
