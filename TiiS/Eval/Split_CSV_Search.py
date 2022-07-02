from init import *
from testURL import *

data = pd.read_csv("./result/search/SearchList_test__1.csv")

for (gender), group in data.groupby(['URL name']):
     group.to_csv(f'{gender}.csv', index=False)