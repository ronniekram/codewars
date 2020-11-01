#my solution
def nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth)
  month = 0
  savings = 0
  while savings < (startPriceNew - startPriceOld) do 
   month += 1
   percentLossByMonth += 0.5 if month.even?
   decimal = 1 - (percentLossByMonth.to_f / 100)
   startPriceOld = startPriceOld * decimal
   startPriceNew = startPriceNew * decimal
   savings += savingPerMonth
  end 
  leftover = savings - (startPriceNew - startPriceOld)
  [month, leftover.round]
 end

#best solution

def nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth, months = 0)
  caculate_price = startPriceOld - startPriceNew + savingperMonth * months
  return [months, caculate_price.round] if caculate_price >= 0
    
  startPriceOld -= startPriceOld * percentLossByMonth / 100
  startPriceNew -= startPriceNew * percentLossByMonth / 100
  percentLossByMonth += 0.5 if months % 2 == 0
  months += 1
end