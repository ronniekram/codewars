# my solution 
class Array
  def square
    self.map {|n| n ** 2 }
  end 

  def cube
    self.map {|n| n ** 3 }
  end 

  def average
    self.sum / self.length
  end 

  def sum
    self.inject(0, :+)
  end 

  def even
    self.select {|n| n if n.even? }
  end 

  def odd
    self.select {|n| n if n.odd? }
  end
end


# best solution

class Array
  def square
    map {|x| x*x}
  end

  def cube
    map {|x| x**3}
  end
  
  def average
    sum / size
  end
  
  def sum
    reduce(:+)
  end
  
  def even
    select(&:even?)
  end
  
  def odd
    select(&:odd?)
  end
end